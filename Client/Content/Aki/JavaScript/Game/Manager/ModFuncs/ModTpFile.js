'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ModTpFile = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Info_1 = require('../../../Core/Common/Info'),
  Log_1 = require('../../../Core/Common/Log'),
  ModManager_1 = require('../ModManager'),
  ModCustomTp_1 = require('./ModCustomTp');

const { VoidThunderFarm } = require('./function/c4-void-thunder');
const { C4SupportFarm } = require('./function/c4-support-farm');
const { C3VoidThunderFarm } = require('./function/c3-void-thunder');
const { C3MoonlightFarm } = require('./function/c3-moonlight-farm');
const { ResonanceBeacon, ResonanceNexus } = require('./data/waypoint');
const { HavocFarm } = require('./function/farm-echos/Havoc');
const { FusionFarm } = require('./function/farm-echos/Fusion');

class ModTpFile {
  static C4_VoidThunderLoop = VoidThunderFarm(50);
  static C4_SupportLoop = C4SupportFarm(50);
  static C3_VoidThunderFarm = C3VoidThunderFarm();
  static C3_MoonlightFarm = C3MoonlightFarm();
  static ResonanceBeacon = ResonanceBeacon;
  static ResonanceNexus = ResonanceNexus;
  static HavocFarm = HavocFarm();
  static FusionFarm = FusionFarm();

  static CustomTpList = [
    this.C4_VoidThunderLoop,
    this.C4_SupportLoop,
    this.C3_VoidThunderFarm,
    this.C3_MoonlightFarm,
    this.ResonanceBeacon,
    this.ResonanceNexus,
    this.BasicChest,
    this.AdvancedChest,
    this.PremiumChest,
    this.HavocFarm,
    this.FusionFarm,
  ];
}
exports.ModTpFile = ModTpFile;
