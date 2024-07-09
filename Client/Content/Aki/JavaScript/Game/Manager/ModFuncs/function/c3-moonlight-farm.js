const {
  chaserazor,
  viridBladeSaurian,
  spearBack,
  stoneWallBracer,
} = require('../data/c3-monster');
const { getDailyFarmEchos } = require('./utils/helper');

const C3MoonlitFarm = () => {
  return getDailyFarmEchos({
    data: [chaserazor, viridBladeSaurian, spearBack, stoneWallBracer].flat(),
    filename: ' C3 Moonlit Farm',
  });
};

module.exports = { C3MoonlitFarm };
