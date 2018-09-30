FROM alpine:3.8

RUN apk update

# Install Java
RUN apk add openjdk8

# Install Python
RUN apk add python3

WORKDIR /root

COPY ./target/scala-2.12/post-tweets-assembly-0.1.jar /root/post-tweets-assembly-0.1.jar
COPY ./results /root/results
COPY ./entrypoint.sh /root/entrypoint.sh

ENTRYPOINT ["/root/entrypoint.sh"]

EXPOSE 8000

CMD ["-Dtweeter.maxUsers=15"]
