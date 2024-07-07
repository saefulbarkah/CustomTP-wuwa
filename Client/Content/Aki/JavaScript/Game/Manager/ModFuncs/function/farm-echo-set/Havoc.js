const {
  glacioPrism,
  havocPrism,
  youngRoseroom,
  excarat,
} = require('../../data/c1-monster');
const {
  havocDreadmane,
  Tambourinist,
  roseshRoom,
} = require('../../data/c3-monster');
const { getDailyFarmEchos } = require('../utils/helper');

const HavocFarm = () => {
  return getDailyFarmEchos({
    data: [
      havocDreadmane,
      Tambourinist,
      roseshRoom,
      glacioPrism,
      havocPrism,
      youngRoseroom,
      excarat,
    ].flat(),
    filename: ' Havoc Set Farm',
  });
};

module.exports = { HavocFarm };
