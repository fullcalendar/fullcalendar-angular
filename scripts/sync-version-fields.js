#!/usr/bin/env node

/*
There are two package.json's:
- in the root, mainly for build system
- in the `project/fullcalendar` dir, for the publishable package

This script copies the following version numbers from the root to -> project/fullcalendar/package.json:
- the `version` string
- the version strings of any `dependencies` they have in common
*/

const fs = require('fs')
const path = require('path')

let rootConfig = require('../package.json')
let projectConfigPath = path.join(__dirname, '../projects/fullcalendar/package.json')
let projectConfig = Object.assign({}, require(projectConfigPath)) // a new copy

projectConfig.version = rootConfig.version

let rootDeps = rootConfig.dependencies
let projectDeps = projectConfig.dependencies = Object.assign({}, projectConfig.dependencies) // a new copy

for (let depName in projectDeps) {
  if (depName in rootDeps) {
    projectDeps[depName] = rootDeps[depName]
  }
}

fs.writeFileSync(
  projectConfigPath,
  JSON.stringify(projectConfig, null, '  ')
)
