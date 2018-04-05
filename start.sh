#!/bin/bash

export PORT=5106

cd ~/www/tasks3
./bin/tasks3 stop || true
./bin/tasks3 start