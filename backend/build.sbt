name := """play-desafio-justa"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.12.6"

crossScalaVersions := Seq("2.12.6", "2.11.12")

libraryDependencies += guice
libraryDependencies += "uk.co.panaxiom" %% "play-jongo" % "2.1.0-jongo1.3"
libraryDependencies += filters
