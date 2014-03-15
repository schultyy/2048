function def(){
  this.primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];
  this.current = 0;
  this.nextPrime = function() {
    return this.primes[this.current++];
  };
  this.first = function() {
    this.primes[0];
  };
  this.second = function() {
    this.primes[1];
  };
  this.highScore = function() {
    var last = this.primes.length - 1;
    return this.primes[last];
  };
}

Definitions = new def();
