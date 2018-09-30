package gov.ornl.vaosl.querybenchmark

import com.datastax.driver.core.SocketOptions
import com.outworkers.phantom.dsl._
import com.typesafe.config.{Config, ConfigFactory}

import scala.collection.JavaConverters._

object CassandraConnector {

  val conf: Config = ConfigFactory.load().getConfig("cassandra")
  val default: CassandraConnection = ContactPoints.apply(conf.getStringList("hosts").asScala)
    .withClusterBuilder(_.withSocketOptions(
      new SocketOptions()
        .setConnectTimeoutMillis(20000)
        .setReadTimeoutMillis(20000)
    )
    ).noHeartbeat().keySpace(
    KeySpace("tweets").ifNotExists().`with`(
      replication eqs SimpleStrategy.replication_factor(1)
    )
  )
}


case class Tweet(
                  id: UUID,
                  handle: String,
                  content: String
                )

abstract class Tweets extends Table[Tweets, Tweet] {
  object id extends UUIDColumn with PartitionKey
  object handle extends StringColumn
  object content extends StringColumn
}

class BasicDatabase(override val connector: CassandraConnection) extends Database[BasicDatabase](connector) {
  object entries extends Tweets with Connector
}

object db extends BasicDatabase(CassandraConnector.default)