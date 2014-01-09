function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  player1.game = this;
  player2.game = this;
}

Game.prototype.winner = function() {
  var score1 = this.player1.score
  var score2 = this.player2.score
  if((score1 < 11 && score2 < 11) || Math.abs(score1 - score2) < 2) {
    return null
  }
  else {
    this.reset();
    return score1 > score2 ? this.player1 : this.player2;
  }
}

Game.prototype.reset = function() {
  this.player1.score = 0;
  this.player2.score = 0;
}
