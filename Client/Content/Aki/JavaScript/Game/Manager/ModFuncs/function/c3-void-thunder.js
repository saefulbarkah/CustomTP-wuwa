const { Flautist, VioletFeatheredHeron } = require('../data/c3-monster');

const C3VoidThunderFarm = () => {
  const monsterLists = [...Flautist, ...VioletFeatheredHeron];
  const monstCount = monsterLists.length;
  const data = [];
  for (let index = 0; index < monstCount; index++) {
    data.push({
      id: index + 1,
      filename: 'C3 Void Thunder Farm',
      ...monsterLists[index],
    });
  }

  return data;
};

module.exports = { C3VoidThunderFarm: C3VoidThunderFarm };
