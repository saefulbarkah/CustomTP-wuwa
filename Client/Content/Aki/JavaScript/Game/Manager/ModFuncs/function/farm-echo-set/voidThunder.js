const {
    flautist,
    lumiscaleConstruct,
    violetFeatheredHeron,
  } = require('../../data/c3-monster'),
  {
    electroPredator,
    fissionJunrock,
    havocPrism,
    vanguardJunrock,
    trafficIlluminator,
  } = require('../../data/c1-monster');
const { getDailyFarmEchos } = require('../utils/helper');

const FusionFarm = () => {
  return getDailyFarmEchos({
    data: [
      flautist,
      lumiscaleConstruct,
      violetFeatheredHeron,
      electroPredator,
      fissionJunrock,
      havocPrism,
      vanguardJunrock,
      trafficIlluminator,
    ].flat(),
    filename: ' Fusion Set Farm',
  });
};

module.exports = { FusionFarm };
