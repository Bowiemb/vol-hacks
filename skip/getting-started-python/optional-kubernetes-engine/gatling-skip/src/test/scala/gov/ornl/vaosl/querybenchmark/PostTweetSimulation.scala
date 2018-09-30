package gov.ornl.vaosl.querybenchmark

import com.typesafe.config.{Config, ConfigFactory}
import com.typesafe.scalalogging.LazyLogging
import io.gatling.commons.validation.Validation
import io.gatling.core.Predef._
import io.gatling.core.feeder.RecordSeqFeederBuilder
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

import scala.collection.JavaConverters._
import scala.concurrent.duration._


object TweetConf extends LazyLogging {

  val conf: Config = ConfigFactory.load().getConfig("tweeter")

  val confMap: Map[String, String] = conf.entrySet().asScala.map(m => m.getKey -> m.getValue.render()).toMap

  logger.info(confMap.map{ case (k,v) => s"$k -> $v"}.mkString("\n"))

  val endpoint: String = conf.getString("endpoint")
  val duration: FiniteDuration = conf.getInt("duration") minutes
  val maxUsers: Int = conf.getInt("maxUsers")
}


object PostTweet {

  val template: Session => Validation[Map[String,String]]  = (session: Session) =>
    for {
      handle <- session("handle").validate[String]
      tweet <- session("content").validate[String]
    } yield Map("tweet[handle]" -> handle, "tweet[content]" -> tweet)

  val feeder: RecordSeqFeederBuilder[Any] = jsonFile("tweets.json").random

  val post: ChainBuilder =
    exec(
      http("Search")
        .post("")
        .formParamMap(template)
    )
}


class PostTweetSimulation extends Simulation {

  import TweetConf._

  val httpConf: HttpProtocolBuilder = http
    .baseURL(endpoint) // Here is the root for all relative URLs
    .contentTypeHeader("application/x-www-form-urlencoded")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // Here are the common headers
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val scn: ScenarioBuilder = scenario("Random Tweet Scenario")
    .feed(PostTweet.feeder)
    .exec(PostTweet.post)

  setUp(scn.inject(rampUsers(maxUsers) over duration).protocols(httpConf))


}

