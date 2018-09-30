name := "post-tweets"

version := "0.1"

scalaVersion := "2.12.6"

enablePlugins(GatlingPlugin)

val phantomVersion = "2.24.10"

libraryDependencies ++= Seq(
  "ch.qos.logback" % "logback-classic" % "1.2.3",
  "com.typesafe.scala-logging" %% "scala-logging" % "3.9.0",
  "io.gatling.highcharts" % "gatling-charts-highcharts" % "2.3.0",
  "io.gatling"            % "gatling-test-framework"    % "2.3.0",
  "com.outworkers"  %% "phantom-dsl" % phantomVersion
)

mainClass in assembly := Some("gov.ornl.vaosl.querybenchmark.Engine")

assemblyMergeStrategy in assembly := {
  case PathList("META-INF", xs @ _*) => MergeStrategy.discard
  case x => MergeStrategy.first
}

