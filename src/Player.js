function Player(name) {
  this.name = name;
  this.score = 0;
  this.gamesWon = 0;
}

Player.prototype.scorePoint = function() {
  this.score += 1;
  if(this.game.winner(this) === this) {
    this.gamesWon ++;
  }
}
