const clangBang = require('../data/c1/clangBang.json'),
  dwarfCassoywary = require('../data/c1/dwarfCassoywary.json'),
  electroPredator = require('../data/c1/electroPredator.json'),
  excarat = require('../data/c1/excarat.json'),
  fissionJunrock = require('../data/c1/fissionJunrock.json'),
  fusionDreadmane = require('../data/c1/fusionDreadmane.json'),
  fusionPrism = require('../data/c1/fusionPrism.json'),
  glacioPrism = require('../data/c1/glacioPrism.json'),
  gulPuff = require('../data/c1/gulPuff.json'),
  havocPrism = require('../data/c1/havocPrism.json'),
  hoosCamp2 = require('../data/c1/hoosCamp2.json'),
  lavaLava = require('../data/c1/lavaLarva.json'),
  snipSnap = require('../data/c1/snipSnap.json'),
  spectroPrism = require('../data/c1/spectroPrism.json'),
  trafficIlluminator = require('../data/c1/trafficIluminator.json'),
  whiffWhaff = require('../data/c1/whiffWhaff.json'),
  youngRoseroom = require('../data/c1/youngRosesroom.json'),
  vanguardJunrock = require('../data/c1/vanguardJunrock.json'),
  zigZag = require('../data/c1/zigZag.json');

const Tambourinist = require('../data/c3/Tambourinist.json'),
  viridBladeSaurian = require('../data/c3/virid-blade-saurian.json'),
  violetFeatheredHeron = require('../data/c3/violet-feathered-heron.json'),
  stoneWallBracer = require('../data/c3/StonewallBracer.json'),
  spearBack = require('../data/c3/Spearback.json'),
  hoochiefCyclone = require('../data/c3/hoochief-cyclone.json'),
  havocDreadmane = require('../data/c3/havocDreadmane.json'),
  flautist = require('../data/c3/flautist.json'),
  chasmGuardian = require('../data/c3/chasmGuardian.json'),
  chaserazor = require('../data/c3/chaserazor.json'),
  rocksteadyGuardian = require('../data/c3/rocksteadyGuardian.json'),
  redEcho = require('../data/c3/redEcho.json'),
  lumiscaleConstruct = require('../data/c3/lumiscaleConstruct.json'),
  glacioDreadmane = require('../data/c3/glacioDreadmane.json'),
  lightCrusher = require('../data/c3/lightCrusher.json'),
  roseshRoom = require('../data/c3/Roseshroom.json');

let listMonster = [
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
  ...vanguardJunrock,
  ...clangBang,
];

const {
  FeilianBeringal,
  ImpermanenceHeron,
  InfernoRider,
  LampylumenMyriad,
  Merch,
  MouringAix,
  Tempest,
  Thundering,
} = require('../data/c4-boss');

const { getDailyFarmEchos } = require('../utils/helper');

const allEchoes = ({ withBosses = false } = {}) => {
  const filename = '<color=#ff0095> Clear all echoes </color>';

  if (withBosses === true) {
    let c4Bosss = [];
    filename = ' Clear echo entire world Include Boss';
    for (let index = 0; index < listMonster.length; index++) {
      c4Bosss.push(
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
    filename: filename,
  });
};

module.exports = { allEchoes };
