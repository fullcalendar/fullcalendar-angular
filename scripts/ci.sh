#!/usr/bin/env bash

set -e # always immediately exit upon error

npm run clean

# npm run e2e

npm run test

npm run build

# npm run lint
