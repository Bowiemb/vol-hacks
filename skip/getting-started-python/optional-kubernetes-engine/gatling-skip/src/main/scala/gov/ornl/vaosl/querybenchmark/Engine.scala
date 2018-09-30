package gov.ornl.vaosl.querybenchmark

import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder

object Engine extends App {

  val props = new GatlingPropertiesBuilder
  props.simulationClass("gov.ornl.vaosl.querybenchmark.PostTweetSimulation")
  //props.dataDirectory("path.to.data.directory") //optional
  //props.resultsDirectory("path.to.results.directory") //optional
  //props.bodiesDirectory("path.to.template.directory") //optional
  //props.binariesDirectory("path.to.binaries.directory") //optional

  Gatling.fromMap(props.build)

}

