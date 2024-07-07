const { Tempest, Thundering } = require('../data/c4-boss');

const VoidThunderFarm = (count = 10) => {
  const data = [];
  for (let index = 0; index < count; index++) {
    const boss = index % 2 === 0 ? Thundering : Tempest;
    data.push({ id: index + 1, filename: ' C4 Thundering Farm', ...boss });
  }
  return data;
};

module.exports = { VoidThunderFarm: VoidThunderFarm };
