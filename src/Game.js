function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  player1.game = this;
  player2.game = this;
}

Game.prototype.checkForWin = function() {
  if(this.player1.score == 11 || this.player2.score == 11) {
    this.player1.score = 0;
    this.player2.score = 0;
  }
};
