#!/bin/sh

cd /root/results && python3.6 -m http.server 8000 &

java "$@" -jar post-tweets-assembly-0.1.jar
