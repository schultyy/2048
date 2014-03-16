function Definitions() {
  this.powToPrime = {
    "2": { value: 2, bonusTime: 0 },
    "4": { value: 3, bonusTime: 0 },
    "8": { value: 5, bonusTime: 0 },
    "16": { value: 7, bonusTime: 1 },
    "32": { value: 11, bonusTime: 1 },
    "64": { value: 13, bonusTime: 5 },
    "128": { value: 17, bonusTime: 5 },
    "256": { value: 19, bonusTime: 5 },
    "512": { value: 23, bonusTime: 5 },
    "1024": { value: 29, bonusTime: 5 },
    "2048": { value: 31, bonusTime: 5 }
  };
}

Definitions.prototype.map = function (pow) {
    return this.powToPrime[pow.toString()].value;
};

Definitions.prototype.first = function () {
    return this.powToPrime["2"].value;
};

Definitions.prototype.second = function () {
    return this.powToPrime["4"].value;
};

Definitions.prototype.last = function () {
    return this.powToPrime["2048"].value;
};

Definitions.prototype.highScore = function() {
    return 2048;
};

Definitions.prototype.bonusTimeForTile = function(tileValue) {
  return this.powToPrime[tileValue.toString()].bonusTime;
};

definitions = new Definitions();
