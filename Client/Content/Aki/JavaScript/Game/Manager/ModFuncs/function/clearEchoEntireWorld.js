const {
  clangBang,
  dwarfCassoywary,
  electroPredator,
  excarat,
  fissionJunrock,
  fusionDreadmane,
  fusionPrism,
  glacioPrism,
  gulPuff,
  havocPrism,
  hoosCamp2,
  lavaLava,
  snipSnap,
  spectroPrism,
  trafficIlluminator,
  whiffWhaff,
  youngRoseroom,
  zigZag,
} = require('../data/c1-monster');

const {
  Tambourinist,
  chaserazor,
  chasmGuardian,
  flautist,
  glacioDreadmane,
  havocDreadmane,
  hoochiefCyclone,
  lightCrusher,
  lumiscaleConstruct,
  redEcho,
  rocksteadyGuardian,
  roseshRoom,
  spearBack,
  stoneWallBracer,
  violetFeatheredHeron,
  viridBladeSaurian,
} = require('../data/c3-monster');

let listMonster = [
  ...clangBang,
  ...dwarfCassoywary,
  ...electroPredator,
  ...excarat,
  ...fissionJunrock,
  ...fusionDreadmane,
  ...fusionPrism,
  ...glacioPrism,
  ...gulPuff,
  ...havocPrism,
  ...hoosCamp2,
  ...lavaLava,
  ...snipSnap,
  ...spectroPrism,
  ...trafficIlluminator,
  ...whiffWhaff,
  ...youngRoseroom,
  ...zigZag,
  ...Tambourinist,
  ...chaserazor,
  ...chasmGuardian,
  ...flautist,
  ...glacioDreadmane,
  ...havocDreadmane,
  ...hoochiefCyclone,
  ...lightCrusher,
  ...lumiscaleConstruct,
  ...redEcho,
  ...rocksteadyGuardian,
  ...roseshRoom,
  ...spearBack,
  ...stoneWallBracer,
  ...violetFeatheredHeron,
  ...viridBladeSaurian,
];
const {
  BellBorne,
  FeilianBeringal,
  ImpermanenceHeron,
  InfernoRider,
  LampylumenMyriad,
  Merch,
  MouringAix,
  Tempest,
  Thundering,
} = require('../data/c4-boss');

const { getDailyFarmEchos } = require('./utils/helper');

const clearEchoEntireWorld = (withBosses) => {
  if (withBosses) {
    let c4Bosss = [];
    for (let index = 0; index < listMonster.length; index++) {
      c4Bosss.push(
        BellBorne,
        FeilianBeringal,
        ImpermanenceHeron,
        InfernoRider,
        LampylumenMyriad,
        Merch,
        MouringAix,
        Tempest,
        Thundering
      );
    }
    let c4BossIndex = 0;
    listMonster.forEach((monster, index) => {
      if ((index + 1) % 8 === 0) {
        let includeBoss = c4Bosss[c4BossIndex % c4Bosss.length];
        listMonster.splice(index, 0, includeBoss);
      }
    });
  }
  return getDailyFarmEchos({
    data: [listMonster].flat(),
    filename: 'Clear echo entire world',
  });
};

module.exports = { clearEchoEntireWorld };
