function Player() {
  this.score = 0;
}

Player.prototype.scorePoint = function() {
  this.score += 1;
  console.log(this.game);
  this.game.checkForWin(this);
};
