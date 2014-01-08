describe("Game", function() {
  var game;

  beforeEach(function() {
    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);
  });

  it("should be initialized with 2 players", function() {
    expect(game.player1).toBe(player1);
    expect(game.player2).toBe(player2);
  });

  it("should be reset once a player reaches score of 11", function() {
    var times = 11
    while(times --) {
      game.player1.scorePoint();
    }
    expect(game.player1.score).toEqual(0);
    expect(game.player2.score).toEqual(0);
  });
});
