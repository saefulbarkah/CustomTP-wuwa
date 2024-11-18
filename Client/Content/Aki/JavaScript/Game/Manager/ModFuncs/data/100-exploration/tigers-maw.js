const { getData } = require('../../function/utils/helper');

const Tigermaw_area = [
  {
    id: 1,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest',
    x: -49200.9296875,
    y: 148967.71875,
    z: 4137.67041015625,
  },
  {
    id: 2,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -47286.62890625,
    y: 158510.578125,
    z: 4981.416015625,
  },
  {
    id: 3,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Purple',
    x: -38100.421875,
    y: 162456.40625,
    z: 5106.2275390625,
  },
  {
    id: 4,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -31413.578125,
    y: 162830.40625,
    z: 4481.07958984375,
  },
  {
    id: 5,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -22501.712890625,
    y: 165035,
    z: 3728.60205078125,
  },
  {
    id: 6,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -22389.478515625,
    y: 172664.984375,
    z: 3232.1337890625,
  },
  {
    id: 7,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -21653.73046875,
    y: 182975.75,
    z: 2278.55859375,
  },
  {
    id: 8,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -28046.666015625,
    y: 173500.3125,
    z: -6184.85546875,
  },
  {
    id: 9,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest',
    x: -51008.421875,
    y: 164420.328125,
    z: 1058.393798828125,
  },
  {
    id: 10,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -50154.19140625,
    y: 168979.09375,
    z: 1058.39208984375,
  },
  {
    id: 11,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -47714.08984375,
    y: 180288.859375,
    z: 147.5155029296875,
  },
  {
    id: 12,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -48973.6875,
    y: 182749.96875,
    z: 1315.4068603515625,
  },
  {
    id: 13,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -48456.84375,
    y: 184960.265625,
    z: 1315.4068603515625,
  },
  {
    id: 14,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -51904.60546875,
    y: 183369.25,
    z: 1761.45751953125,
  },
  {
    id: 15,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -49043.51953125,
    y: 187527.21875,
    z: 286.0630798339844,
  },
  {
    id: 16,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -43357.7734375,
    y: 189880,
    z: 148.07730102539062,
  },
  {
    id: 17,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest',
    x: -42874.34765625,
    y: 194109.421875,
    z: 437.5634460449219,
  },
  {
    id: 18,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -32586.400390625,
    y: 199100.703125,
    z: 857.7150268554688,
  },
  {
    id: 19,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -40961.18359375,
    y: 186253.171875,
    z: -10860.8759765625,
  },
  {
    id: 20,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest (2-days quest)',
    x: -46673.296875,
    y: 187903.546875,
    z: -10278.3603515625,
  },
  {
    id: 21,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -67533.1015625,
    y: 167557.109375,
    z: 1870.2423095703125,
  },
  {
    id: 22,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -72958.390625,
    y: 172803.0625,
    z: 3398.666748046875,
  },
  {
    id: 23,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -73858.2890625,
    y: 175158.796875,
    z: 2287.868896484375,
  },
  {
    id: 24,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -64387.609375,
    y: 186772.953125,
    z: 1917.06640625,
  },
  {
    id: 25,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -62343.85546875,
    y: 191867.546875,
    z: 1916.763427734375,
  },
  {
    id: 26,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tower Challenge',
    x: -60670.6328125,
    y: 194083.71875,
    z: 7385.47607421875,
  },
  {
    id: 27,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest',
    x: -62915.41796875,
    y: 197214.140625,
    z: 7411.17578125,
  },
  {
    id: 28,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -62536.23046875,
    y: 205456.140625,
    z: 8291.818359375,
  },
  {
    id: 29,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Overdash Challenge',
    x: -60450.45703125,
    y: 209629.59375,
    z: 9344.666015625,
  },
  {
    id: 30,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Matrix Challenge',
    x: -57845.62890625,
    y: 219673.5625,
    z: 9673.5009765625,
  },
  {
    id: 31,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tower Challenge',
    x: -51036.16015625,
    y: 221234.359375,
    z: 8757.1083984375,
  },
  {
    id: 32,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -41486.93359375,
    y: 225386.96875,
    z: 5391.953125,
  },
  {
    id: 33,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest',
    x: -45138.3828125,
    y: 214217,
    z: 4658.63720703125,
  },
  {
    id: 34,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -37321.03125,
    y: 210864.8125,
    z: 2038.20556640625,
  },
  {
    id: 35,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -32718.1875,
    y: 216161.796875,
    z: 2554.682373046875,
  },
  {
    id: 36,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest (Puzzle)',
    x: -28963.1796875,
    y: 212037.375,
    z: 3439.825439453125,
  },
  {
    id: 37,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest (Puzzle)',
    x: -34741.328125,
    y: 206100.640625,
    z: 6303.98486328125,
  },
  {
    id: 38,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Gold',
    x: -39136.94140625,
    y: 203669.546875,
    z: 7917.40283203125,
  },
  {
    id: 39,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -52356.29296875,
    y: 207949.609375,
    z: 5843.314453125,
  },
  {
    id: 40,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Advanced Chest (Terminal)',
    x: -51428.27734375,
    y: 201995.125,
    z: 5516.34521484375,
  },
  {
    id: 41,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -44976.56640625,
    y: 195742.09375,
    z: 6480.40380859375,
  },
  {
    id: 42,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -48699.4453125,
    y: 195147.515625,
    z: 6217.2802734375,
  },
  {
    id: 43,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -50496.84375,
    y: 193968.078125,
    z: -3301.745361328125,
  },
  {
    id: 44,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Basic Chest',
    x: -57260.18359375,
    y: 185543.671875,
    z: 4159.93603515625,
  },
  {
    id: 45,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Blue',
    x: -58473.2578125,
    y: 180457.9375,
    z: 2893.9296875,
  },
  {
    id: 46,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Hover Challenge',
    x: -61453.16015625,
    y: 176868.78125,
    z: 4063.067138671875,
  },
  {
    id: 47,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Tidal Purple',
    x: -22872.341796875,
    y: 165333.984375,
    z: -2672.376220703125,
  },
  {
    id: 48,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Standard Chest (Puzzle)',
    x: -20467.80859375,
    y: 167413.15625,
    z: -2668.682861328125,
  },
  {
    id: 49,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Advanced Chest (3-days quest)',
    x: -47111.22265625,
    y: 196581.59375,
    z: -4043.48974609375,
  },
  {
    id: 50,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Blobfly',
    x: -55789.25390625,
    y: 174291.859375,
    z: 5641.744140625,
  },
  {
    id: 51,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Viewpoint',
    x: -36105.77734375,
    y: 203539.21875,
    z: 8448.2998046875,
  },
  {
    id: 52,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Blobfly 2',
    x: -53736.76171875,
    y: 215510.34375,
    z: 8716.732421875,
  },
  {
    id: 53,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Sonance Casket',
    x: -54700.7890625,
    y: 222012.5625,
    z: 7963.65478515625,
  },
  {
    id: 54,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Nexus',
    x: -51648.30859375,
    y: 170552.421875,
    z: 1114.451171875,
  },
  {
    id: 55,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Beacon',
    x: -43634.98828125,
    y: 181476.578125,
    z: -10841.8173828125,
  },
  {
    id: 56,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Beacon 2',
    x: -28664.62109375,
    y: 189299.9375,
    z: 1579.141845703125,
  },
  {
    id: 57,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Beacon 3',
    x: -21646.068359375,
    y: 186180.8125,
    z: -17832.28515625,
  },
  {
    id: 58,
    filename: '<color=#00a2ff> Tiger Maw Area </color>',
    name: 'Beacon 4',
    x: -31028.978515625,
    y: 211761.9375,
    z: 2362.506591796875,
  },
];

module.exports = {
  tigerMaw100: () => {
    return getData({ data: Tigermaw_area });
  },
};
