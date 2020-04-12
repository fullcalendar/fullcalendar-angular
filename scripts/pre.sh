#!/usr/bin/env bash

#
# pre-build scripts
#

set -e # always immediately exit upon error
cd "`dirname $0`" # start in current directory

./scheduler-symlink.sh
