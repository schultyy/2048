function def() {
  this.powToPrime = {
    "2": 2,
    "4": 3,
    "8": 5,
    "16": 7,
    "32": 11,
    "64": 13,
    "128": 17,
    "256": 19,
    "512": 23,
    "1024": 29,
    "2048": 31,
    "4096": 37
  };
  this.map = function (pow) {
    return this.powToPrime[pow.toString()];
  };
  this.first = function () {
    return this.powToPrime["2"];
  };
  this.second = function () {
    return this.powToPrime["4"];
  };
  this.last = function () {
    return this.powToPrime["2048"];
  };
  this.highScore = function() {
    return 2048;
  };
}

Definitions = new def();
