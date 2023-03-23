'use strict';

const deepmerge = require('deepmerge');

function toArray(config) {
  return Array.isArray(config) ? config : [config];
}

function stringOrObject(from) {
  return typeof from === 'string' ? { from } : from;
}

function parse(options) {
  return toArray(options).map((from) =>
    deepmerge(
      {
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ['.gitkeep', '.{cache,git,svn}/**'],
        },
      },
      stringOrObject(from),
    ),
  );
}

module.exports = { parse };
