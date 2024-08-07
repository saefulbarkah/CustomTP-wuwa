'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ModTpFile = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Info_1 = require('../../../Core/Common/Info'),
  Log_1 = require('../../../Core/Common/Log'),
  ModManager_1 = require('../ModManager'),
  ModCustomTp_1 = require('./ModCustomTp');

const { VoidThunderFarm } = require('./function/c4-void-thunder'),
  { C4SupportFarm } = require('./function/c4-support-farm'),
  { C3VoidThunderFarm } = require('./function/c3-void-thunder'),
  { C3MoonlitFarm } = require('./function/c3-moonlight-farm'),
  { HavocFarm } = require('./function/farm-echo-set/Havoc'),
  { clearEchoEntireWorld } = require('./function/clearEchoEntireWorld'),
  { FusionFarm } = require('./function/farm-echo-set/Fusion'),
  { VoidThunder } = require('./function/farm-echo-set/voidThunder'),
  tigersMaw100 = require('./data/100-exploration/tigers-maw'),
  { c4FusionElectroBossLoop } = require('./function/c4-char/fusion-electro');
const { clearEchoCost3 } = require('./function/clearEchoCost3');

class ModTpFile {
  static C4_VoidThunderLoop = VoidThunderFarm(50);
  static C4_SupportLoop = C4SupportFarm(50);
  static C4_FusionElectroFarm = c4FusionElectroBossLoop(99999);
  static C3_VoidThunderFarm = C3VoidThunderFarm();
  static C3_MoonlitFarm = C3MoonlitFarm();
  static HavocFarm = HavocFarm();
  static FusionFarm = FusionFarm();
  static clearEchoEntireWorld = clearEchoEntireWorld();
  static clearEchoEntireWorldIncludeBoss = clearEchoEntireWorld({
    withBosses: true,
  });
  static voidThunder = VoidThunder();
  static clearEchoCost3 = clearEchoCost3();
  static tigersMaw100 = tigersMaw100;

  static CustomTpList = [
    this.C4_VoidThunderLoop,
    this.C4_SupportLoop,
    this.C4_FusionElectroFarm,
    this.C3_VoidThunderFarm,
    this.C3_MoonlitFarm,
    this.HavocFarm,
    this.FusionFarm,
    this.clearEchoEntireWorld,
    this.clearEchoEntireWorldIncludeBoss,
    this.voidThunder,
    this.clearEchoCost3,
    this.tigersMaw100,
  ];
}
exports.ModTpFile = ModTpFile;
