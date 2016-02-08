const chai = require('chai');
const Trophies = require('../lib').Trophies;

describe('Trophies', () => {
  describe('#parseGame', () => {
    it('Should create object with provided JSON values', () => {
      const json = {
        platform: 'ps3,ps4,vita',
        progress: 100,
        trophies: {
          bronze: 7,
          silver: 4,
          gold: 1,
          platinum: 0,
        },
        imgUrl: '/path/to/image',
        title: 'FEZ',
        gameId: 'NPWR05526_00',
      };
      const game = Trophies.parseGame(json);
      chai.assert.equal(game.id, 'NPWR05526_00');
      chai.assert.equal(game.title, 'FEZ');
      chai.assert.lengthOf(game.platforms, 3);
      chai.assert.deepEqual(game.platforms, ['ps3', 'ps4', 'vita']);
      chai.assert.equal(game.progress, 100);
      chai.assert.deepEqual(game.trophies, {
        bronze: 7, silver: 4, gold: 1, platinum: 0,
      });
      chai.assert.equal(game.avatar, '/path/to/image');
    });
  });
});
