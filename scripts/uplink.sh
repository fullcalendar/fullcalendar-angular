#!/usr/bin/env bash

set -e # immediately exit upon error
cd "`dirname $0`/.." # start in project root

cd dist/fullcalendar
npm link
cd -
