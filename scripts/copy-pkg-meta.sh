#!/usr/bin/env bash

set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in root

mkdir -p "dist/fullcalendar"

cp "projects/fullcalendar/package.json" \
  "dist/fullcalendar/package.json"
