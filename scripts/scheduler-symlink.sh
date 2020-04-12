#!/usr/bin/env bash

#
# We symlink to fullcalendar-scheduler's CSS from the angular connector's src/lib directory.
# The angular component then includes these styles via styleUrls.
#
# This was the easiest way to deliver FullCalendar's CSS without forcing the dev to
# include each plugins' stylesheet or write a custom angular builder. The fullcalenedar-scheduler
# stylesheet includes the CSS for ALL plugins, but it's not that big.
#
# The need for this arose out of the fact that angular does not handle arbitrary imports of CSS files
# from JS files. Unfortunately, this is how FullCalendar's plugin system works.
#

set -e # always immediately exit upon error
cd "`dirname $0`/.." # start in root

cd projects/fullcalendar/src/lib
ln -sf ../../../../node_modules/fullcalendar-scheduler/main.css fullcalendar-scheduler.css
