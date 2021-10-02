const leveljs = require("level-js");
const levelup = require("levelup");
const fs = require("level-filesystem");
const pkg = require("./package.json");
const browserify_fs = pkg["browserify-fs"];

const now = new Date();
const secondsSinceEpoch = Math.round(now.getTime() / 1000);
const uuid = window.crypto.getRandomValues(new Uint32Array(1))[0];

const dbNameSuffix = browserify_fs[`db-suffix`]
  ? `-${secondsSinceEpoch}-${uuid}`
  : ``;

const db = levelup(leveljs(`level-filesystem${dbNameSuffix}`));

module.exports = fs(db);
