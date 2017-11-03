#!/usr/bin/env node

const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

function find(rootDir, fileFilter) {
  if (!fs.existsSync(rootDir)) {
    console.error(`Not found dir ${rootDir}`);
    return [];
  }

  return fs.readdirSync(rootDir)
    .filter(fileFilter)
    .map(file => {
      const filename = path.join(rootDir, file);
      const stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
        return find(filename);
      }
      return [filename];
    })
    .reduce((previous, current) => previous.concat(current), []);
}

function isMinifyTarget(file) {
  return /^bundle\.js$/.test(file);
}

function mkMinifiedDir(dir) {
  if (fs.existsSync(dir)) {
    console.log(`already exists ${dir}`);
    return;
  }
  console.log(`mkdir ${dir}`);
  fs.mkdirSync(dir);
}

setTimeout(() => process.exit(1), 20 * 1000, true);

mkMinifiedDir(path.join(__dirname, '..', 'public', 'static'));

const targets = find(path.join(__dirname, '..', 'public'), isMinifyTarget);
targets.map((pathToTarget, index) => {
  const segments = pathToTarget.split(path.sep);
  const pathToMinified = path.join(segments.slice(0, segments.length - 1).join(path.sep), 'static', segments[segments.length - 1]);
  shell.exec(`$(npm bin)/minify ${pathToTarget} --out-file ${pathToMinified}`, (code, stdout, stderr) => {
    console.log(`minified: ${pathToMinified}`);
    shell.rm('-f', pathToTarget);
    if (index === targets.length - 1) {
      process.exit(code);
    }
  });
});
