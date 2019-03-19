'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const libName = require('./package.json').name;
const rootFolder = path.join(__dirname);
const distFolder = path.join(rootFolder, 'dist', libName);

return Promise.resolve()

  // Copy package files
  .then(() => Promise.resolve()
    .then(() => _relativeCopy('LICENSE', rootFolder, distFolder))
    .then(() => _relativeCopy('README.md', rootFolder, distFolder))
    .then(() => console.log('Package files copy succeeded.'))
  )
  .catch(e => {
    console.error('\Build failed. See below for errors.\n');
    console.error(e);
    process.exit(1);
  });


// Copy files maintaining relative paths.
function _relativeCopy(fileGlob, from, to) {
  return new Promise((resolve, reject) => {
    glob(fileGlob, { cwd: from, nodir: true }, (err, files) => {
      if (err) reject(err);
      files.forEach(file => {
        const origin = path.join(from, file);
        const dest = path.join(to, file);
        const data = fs.readFileSync(origin, 'utf-8');
        _recursiveMkDir(path.dirname(dest));
        fs.writeFileSync(dest, data);
        resolve();
      })
    })
  });
}

// Recursively create a dir.
function _recursiveMkDir(dir) {
  if (!fs.existsSync(dir)) {
    _recursiveMkDir(path.dirname(dir));
    fs.mkdirSync(dir);
  }
}
