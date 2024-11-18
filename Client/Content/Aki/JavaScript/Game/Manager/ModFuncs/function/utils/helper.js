// Array of colors with hex codes
const colors = ['#FF0000', '#FFC0CB', '#00FFFF', '#FFFF00', '#800080'];

const getData = ({ data, filename }) => {
  return data.map((d, index) => ({
    ...d,
    id: index + 1,
    filename: filename ? filename : d.filename,
  }));
};

module.exports = {
  getData,
};
