---
layout: post
title: Data visualisation with Kibana and Elasticsearch
categories: software elasticsearch
tags: elasticsearch kibana
redirect_from: Data-visualisation-with-Kibana
---

A while ago I tried to setup an Elasticsearch and Kibana combo using [Docker](https://www.docker.com/) on my local machine and, well, things didn't go too well (a complete lack of understanding my side). I managed to get it working in the end but only after several hours of frustration. As I recall the main issue was a combination of authentication and the containers not seeing each other.

<!--more-->

---

## Update April 2021

Since writing this I've had more exposure to [Docker](https://www.docker.com/) and would just [use docker-compose](https://github.com/gregstanley/setup-reference/blob/main/Docker/docker-compose.yml) for this task.

---

A reason task has given me reason to try again so, entirely for my own benefit I'm going to make a note of what I did to get setup here.

## Running Elasticsearch and Kibana in Docker

I updated [this advice](https://discuss.elastic.co/t/kibana-docker-image-doesnt-connect-to-elasticsearch-image/79511/3) to look like the following (this assumes you have [Docker](https://www.docker.com/) running):

```docker
docker network create elastic
docker run -d --network=elastic --name=elasticsearch -p 9200:9200 -p 9300:9300 docker.elastic.co/elasticsearch/elasticsearch:6.6.1
docker run -d --network=elastic --name=kibana -p 5601:5601 docker.elastic.co/kibana/kibana:6.6.1
```

Note, I added the ports which were missing in the original comment. If this is successful then navigating to localhost:9200 in your browser should get you to the Kibana login screen. You should be able to use the [elastic superuser](https://www.elastic.co/guide/en/elastic-stack-overview/current/built-in-users.html) to login.

### Importing data

With that in place the next challenge is to get some data in there. As it happened I already had some data in a spreadsheet so the task was to find a way to get it into Elasticsearch via the API.

First I converted the csv data into a json file using [csvjson.com](https://www.csvjson.com/csv2json) which was very straight forward.

The more tricky part was finding a way to import the file and the [Abc Elasticsearch import tool](https://medium.appbase.io/cli-for-indexing-data-from-json-to-elasticsearch-92f582c53df4) did the trick. It's a simple exe that can be called from the command line to push a json file straight into Elasticsearch.

Using an elevated command prompt (I received _Access denied_ errors when running it without Admin rights) I ran the following (from within the directory containing the abc exe):

```docker
abc-x.x.x import --src_type=json --src_uri="C:\path\to\file.json" --typename=index-name http://USER:PASSWORD@localhost:9200/index-name
```

Where:

- `abc-x.x.x` is the abc exe with version numbers.
- `--src_uri` is the path to the json file on the local machine.
- `USER:PASSWORD` is at this point the default user and password combination (the usual comments about changing this applies if you're doing anything other than basic testing).
