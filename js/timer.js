function GameTimer(updateCall, finished) {
  this.seconds = 30;
  this.intervalHandle = {};
  this.update = updateCall;
  this.finished = finished;
}

GameTimer.prototype.start = function() {
  var self = this;
  this.seconds = 30; //re set seconds here in case of restart
  this.intervalHandle = setInterval(function (){
    self.update(self);

    if(self.seconds > 0){
      self.seconds --;
    }
    else {
      self.seconds = 0;
      clearInterval(self.intervalHandle);
      self.finished();
    }
  }, 1000);
};

GameTimer.prototype.addBonusTime = function(bonusTime) {
  this.seconds += bonusTime;
};

GameTimer.prototype.stop = function() {
  clearInterval(this.intervalHandle);
}
