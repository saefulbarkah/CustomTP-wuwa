const {
  GlacioPrism,
  HavocPrism,
  YoungRoseshroom,
  Excarat,
} = require('../../data/c1-monster');
const {
  havocDreadmane,
  Tambourinist,
  roseshRoom,
} = require('../../data/c3-monster');
const { getDailyFarmEchos } = require('./helper');

const HavocFarm = () => {
  return getDailyFarmEchos({
    data: [
      havocDreadmane,
      Tambourinist,
      roseshRoom,
      GlacioPrism,
      HavocPrism,
      YoungRoseshroom,
      Excarat,
    ].flat(),
    filename: ' Havoc Set Farm',
  });
};

module.exports = { HavocFarm };
