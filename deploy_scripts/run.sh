#!/usr/bin/env bash

cd /home/ec2-user/node
npm install
pm2 start index.js
