'use strict';


let cmd = function (x, y) {
  return x + y
}

let cmd2 = function (x, y) {
  return x - y
}

module.exports = {"add": cmd, "sub": cmd2 };
