const {
  FusionDreadmane,
  SnipSnap,
  SpectroPrism,
  TrafficIlluminator,
} = require('../../data/c1-monster');
const {
  HavocDreadmane,
  VioletFeatheredHeron,
  ViridBladeSaurian,
} = require('../../data/c3-monster');
const { getDailyFarmEchos } = require('./helper');

const FusionFarm = () => {
  return getDailyFarmEchos({
    data: [
      ViridBladeSaurian,
      HavocDreadmane,
      VioletFeatheredHeron,
      FusionDreadmane,
      SnipSnap,
      SpectroPrism,
      TrafficIlluminator,
    ].flat(),
    filename: ' Fusion Set Farm',
  });
};

module.exports = { FusionFarm };
