var leveljs = require("level-js");
var levelup = require("levelup");
var fs = require("level-filesystem");

var db = levelup(
  `level-filesystem-${window.crypto.getRandomValues(new Uint32Array(1))[0]}`,
  { db: leveljs }
);
module.exports = fs(db);
