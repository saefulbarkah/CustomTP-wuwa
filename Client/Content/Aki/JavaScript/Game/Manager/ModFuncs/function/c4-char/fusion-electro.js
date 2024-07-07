const { InfernoRider, Tempest, Thundering } = require('../../data/c4-boss');

const bosses = [Tempest, Thundering, InfernoRider];
const c4FusionElectroBossLoop = (count = 50) => {
  const data = [];
  for (let index = 0; index < count; index++) {
    const boss = bosses[index % 3];
    data.push({
      id: index + 1,
      filename: ' C4 Fusion and Electro set',
      ...boss,
    });
  }
  return data;
};

module.exports = { c4FusionElectroBossLoop };
