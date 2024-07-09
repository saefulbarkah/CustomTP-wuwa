const {
  flautist,
  violetFeatheredHeron,
  lumiscaleConstruct,
} = require('../data/c3-monster');
const { getDailyFarmEchos } = require('./utils/helper');

const C3VoidThunderFarm = () => {
  return getDailyFarmEchos({
    data: [flautist, violetFeatheredHeron, lumiscaleConstruct].flat(),
    filename: ' C3 Void Thunder set',
  });
};

console.log(C3VoidThunderFarm());

module.exports = { C3VoidThunderFarm: C3VoidThunderFarm };
