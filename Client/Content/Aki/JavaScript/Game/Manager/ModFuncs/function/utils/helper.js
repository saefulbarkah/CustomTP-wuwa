const getDailyFarmEchos = ({ data, filename }) => {
  return data.map((monster, index) => ({
    ...monster,
    id: index + 1,
    filename,
  }));
};

module.exports = {
  getDailyFarmEchos,
};
