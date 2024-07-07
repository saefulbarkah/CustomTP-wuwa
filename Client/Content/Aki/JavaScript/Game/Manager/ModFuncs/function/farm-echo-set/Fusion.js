const {
    viridBladeSaurian,
    havocDreadmane,
    violetFeatheredHeron,
  } = require('../../data/c3-monster'),
  {
    fusionDreadmane,
    snipSnap,
    spectroPrism,
    trafficIlluminator,
    electroPredator,
    fusionPrism,
    lavaLava,
  } = require('../../data/c1-monster');
const { getDailyFarmEchos } = require('../utils/helper');

const FusionFarm = () => {
  return getDailyFarmEchos({
    data: [
      viridBladeSaurian,
      havocDreadmane,
      violetFeatheredHeron,
      fusionDreadmane,
      snipSnap,
      spectroPrism,
      trafficIlluminator,
      electroPredator,
      fusionPrism,
      snipSnap,
      lavaLava,
    ].flat(),
    filename: ' Fusion Set Farm',
  });
};

module.exports = { FusionFarm };
