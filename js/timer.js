function GameTimer(updateCall) {
  this.seconds = 30;
  this.finished = false;
  this.intervalHandle = {};
  this.update = updateCall;
}

GameTimer.prototype.start = function() {
  var self = this;
  this.intervalHandle = setInterval(function (){
    self.update(self);

    if(self.seconds > 0){
      self.seconds --;
    }
    else {
      self.seconds = 0;
      clearInterval(self.intervalHandle);
      self.finished = true;
    }
  }, 1000);
};
