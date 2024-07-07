const {
  GlacioPrism,
  HavocPrism,
  YoungRoseshroom,
  Excarat,
} = require('../../data/c1-monster');
const {
  HavocDreadmane,
  Roseshroom,
  Tambourinist,
} = require('../../data/c3-monster');
const { getDailyFarmEchos } = require('./helper');

const HavocFarm = () => {
  return getDailyFarmEchos({
    data: [
      HavocDreadmane,
      Tambourinist,
      Roseshroom,
      GlacioPrism,
      HavocPrism,
      YoungRoseshroom,
      Excarat,
    ].flat(),
    filename: ' Havoc Set Farm',
  });
};

module.exports = { HavocFarm };
