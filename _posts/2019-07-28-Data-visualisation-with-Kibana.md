---
layout: post
title: Data visualisation with Kibana and Elasticsearch
categories:
  - software
  - data
tags:
  - elasticsearch
  - kibana
---

A while ago I tried to setup an Elasticsearch and Kibana combo using Docker on my local machine and, well, things didn't go too well (a complete lack of understanding my side). I managed to get it working in the end but only after several hours of frustration. As I recall the main issue was a combination of authentication and the containers not seeing each other.
A reason task has given me reason to try again so, entirely for my own benefit I'm going to make a note of what I did to get setup here.
Running Elasticsearch and Kibana in Docker
I updated this advice to look like the following (this assumes you have Docker running):

Note, I added the ports which were missing in the original comment. If this is successful then navigating to localhost:9200 in your browser should get you to the Kibana login screen. You should be able to use the elastic superuser to login.
Importing data
With that in place the next challenge is to get some data in there. As it happened I already had some data in a spreadsheet so the task was to find a way to get it into Elasticsearch via the API.
First I converted the csv data into a json file using csvjson.com which was very straight forward.
The more tricky part was finding a way to import the file and the Abc Elasticsearch import tool did the trick. It's a simple exe that can be called from the command line to push a json file straight into Elasticsearch.
Using an elevated command prompt (I received Access denied errors when running it without Admin rights) I ran the following (from within the directory containing the abc exe):

Where:
abc-x.x.x is the abc exe with version numbers.
--src_uri is the path to the json file on the local machine.
USER:PASSWORD is at this point the default user and password combination (the usual comments about changing this applies if you're doing anything other than basic testing).
