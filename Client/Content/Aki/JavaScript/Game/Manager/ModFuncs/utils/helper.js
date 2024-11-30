const getDailyFarmEchos = ({ data, filename }) => {
  return data.map((monster, index) => ({
    ...monster,
    id: index + 1,
    filename:
      filename ||
      monster.filename ||
      '<color=#ffff00> Unknown filename</color>',
  }));
};

module.exports = {
  getDailyFarmEchos,
};
