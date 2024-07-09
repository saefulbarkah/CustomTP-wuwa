const monsterLists = require('../data/c3-monster');
const { getDailyFarmEchos } = require('./utils/helper');

const clearEchoCost3 = () => {
  const datas = Object.values(monsterLists).flat();
  return getDailyFarmEchos({
    data: [datas].flat(),
    filename: ' Clear Echo Cost 3',
  });
};

module.exports = { clearEchoCost3 };
