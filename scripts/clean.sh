#!/usr/bin/env bash

#
# clears all generated files
#

set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in root

# clear generated files for the fullcalendar lib and the demo project
rm -rf dist

# restore because was deleted in dist
git checkout -- dist/fullcalendar/package.json

# remove the fullcalendar-scheduler link
# see scheduler-symlink.sh for more info
rm -f projects/fullcalendar/src/lib/fullcalendar-scheduler.css
