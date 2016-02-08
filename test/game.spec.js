const chai = require('chai');
const Game = require('../lib').Game;

describe('Game', () => {
  describe('#constructor', () => {
    it('should set all parameters provided', () => {
      const game = new Game({ id: 'GAME1', title: 'Fallout 4', platforms: [],
        progress: 20, trophies: { bronze: 1 }, avatar: '/path/to/image' });
      chai.assert.equal(game.id, 'GAME1');
      chai.assert.equal(game.title, 'Fallout 4');
      chai.assert.lengthOf(game.platforms, 0);
      chai.assert.equal(game.progress, 20);
      chai.assert.equal(game.trophies.bronze, 1);
      chai.assert.equal(game.avatar, '/path/to/image');
    });
    it('should set default trophy values', () => {
      const defaultTrophies = { bronze: 0, silver: 0, gold: 0, platinum: 0 };
      const game = new Game({ trophies: {} });
      chai.assert.deepEqual(game.trophies, defaultTrophies);
    });
  });
  describe('#belongsToPlatform', () => {
    it('should return true if the game is on the specified platform', () => {
      const game = new Game({ platforms: ['ps4'] });
      chai.assert.equal(game.belongsToPlatform('ps4'), true);
    });
    it('Should return false if the game is not on the specified platform', () => {
      const game = new Game({ platforms: ['ps4'] });
      chai.assert.equal(game.belongsToPlatform('vita'), false);
    });
  });
});
