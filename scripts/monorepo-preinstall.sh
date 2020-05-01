#!/usr/bin/env bash

#
# pre-INSTALL script
# gets ready for a npm/yarn install even before dist has been built
#

set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in project root

mkdir -p dist/fullcalendar

if [[ ! -f "dist/fullcalendar/package.json" ]]; then
  cp "projects/fullcalendar/package.json" "dist/fullcalendar/package.json"
fi
