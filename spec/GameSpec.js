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

  it("should not be won if neither player has scored 11", function() {
    var times = 10
    while(times --) {
      game.player1.scorePoint();
    }
    expect(game.player1.score).toEqual(10);
    expect(game.player2.score).toEqual(0);
  });

  it("should not be won if score difference is < 2", function() {
    var times = 12
    while(times --) {
      game.player1.scorePoint();
      game.player2.scorePoint();
    }
    game.player1.scorePoint();
    expect(game.player1.score).toEqual(13);
    expect(game.player2.score).toEqual(12);
  });

  it("should be reset once a player wins", function() {
    var times = 11
    while(times --) {
      game.player1.scorePoint();
    }
    expect(game.player1.score).toEqual(0);
    expect(game.player2.score).toEqual(0);
  });

  it("should increment the winning player's game count when won", function() {
    var times = 11
    while(times --) {
      game.player1.scorePoint();
    }
    expect(game.player1.gamesWon).toEqual(1);
  });
});
