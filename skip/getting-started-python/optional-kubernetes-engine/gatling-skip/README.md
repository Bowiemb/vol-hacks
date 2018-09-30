tweeter
---

Demo code to post tweets to the DC/OS example tweeter service using random
handles and contents.

# Java

The basic command being run is

```bash
java -jar post-tweets-assembly-0.1.jar
```

# Bash

The script `run_test.sh` will accept system properties and
pass them to `java`. For example:

```bash
./root/run_test.sh -Dtweeter.maxUsers=10 -Dtweeter.duration=2
```

# Docker

The docker image will run the simulation.

```bash
docker run docker-registry:443/gatling:posttweets -Dtweeter.maxUsers=10000 -Dtweeter.duration=2
```