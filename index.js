var leveljs = require("level-js");
var levelup = require("levelup");
var fs = require("level-filesystem");

var now = new Date();
var secondsSinceEpoch = Math.round(now.getTime() / 1000);

var db = levelup(
  `level-filesystem-${secondsSinceEpoch}-${
    window.crypto.getRandomValues(new Uint32Array(1))[0]
  }`,
  { db: leveljs }
);
module.exports = fs(db);
