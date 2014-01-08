describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
    opponent = new Player();
    game = new Game(player, opponent);
  });

  it("should be initialized with a score of 0", function() {
    expect(player.score).toEqual(0);
  });

  it("should be be able to score points", function() {
    player.scorePoint();
    expect(player.score).toEqual(1);
  });
});
