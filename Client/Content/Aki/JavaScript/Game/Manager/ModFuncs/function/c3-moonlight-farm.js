const {
  chaserazor,
  viridBladeSaurian,
  spearBack,
  stoneWallBracer,
} = require('../data/c3-monster');

const C3MoonlightFarm = () => {
  const monsterLists = [
    ...chaserazor,
    ...viridBladeSaurian,
    ...spearBack,
    ...stoneWallBracer,
  ];
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

module.exports = { C3MoonlightFarm };
