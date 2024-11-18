'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ModTpFile = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Info_1 = require('../../../Core/Common/Info'),
  Log_1 = require('../../../Core/Common/Log'),
  ModManager_1 = require('../ModManager'),
  ModCustomTp_1 = require('./ModCustomTp');
const {
  bossC4,
  Fusion,
  Aero,
  Glacio,
  Void_thunder,
  Havoc,
  Moonlith,
  Spectro,
} = require('./function/farm-set');
const Cost_all = require('./function/cost-all');
const C1_farm = require('./function/c1-farm');
const Central_plains = require('./data/100-exploration/central-plains');
const { Desorock } = require('./data/100-exploration/desorock');
const Tigermaw_area = require('./data/100-exploration/tigers-maw');
const Dim_forest = require('./data/100-exploration/dim-forest');
const Gorges_area = require('./data/100-exploration/georges-area');
const Guixui_area = require('./data/100-exploration/guixui-area');
const Jinzhou_area = require('./data/100-exploration/jinzhou-area');
const Nortfall_area = require('./data/100-exploration/norfall-area');
const Whimming_area = require('./data/100-exploration/wiming-area');
const Whummingbay_area = require('./data/100-exploration/whuming-bay');
const Firmament_area = require('./data/100-exploration/firmament');
const {
  BlackShore,
  BlackShore_Under,
} = require('./data/100-exploration/black-shore');
const MuterFly_All_in_One = require('./data/100-exploration/Mutterfly-aio');

class ModTpFile {
  // echos
  static bossC4 = bossC4(10);
  static costAll = Cost_all;
  static C1_farm = C1_farm;
  static Fusion = Fusion;
  static Aero = Aero;
  static Glacio = Glacio;
  static Void_thunder = Void_thunder;
  static Havoc = Havoc;
  static Moonlith = Moonlith;
  static Spectro = Spectro;

  // 100% map
  static centralPlains100 = Central_plains;
  static desorock100 = Desorock;
  static tigersMaw100 = Tigermaw_area;
  static dimForest100 = Dim_forest;
  static gorgesArea100 = Gorges_area;
  static guixuiArea100 = Guixui_area;
  static jinzhouArea100 = Jinzhou_area;
  static NortfallArea100 = Nortfall_area;
  static wimingArea100 = Whimming_area;
  static Whummingbay_area = Whummingbay_area;
  static Firmament_area = Firmament_area;
  static BlackShore = BlackShore;
  static BlackShore_Under = BlackShore_Under;
  static MuterFly_All_in_One = MuterFly_All_in_One;

  static CustomTpList = [
    // echos
    this.bossC4,
    this.costAll,
    this.C1_farm,
    this.Fusion,
    this.Aero,
    this.Glacio,
    this.Void_thunder,
    this.Havoc,
    this.Moonlith,
    this.Spectro,

    // 100% map
    this.centralPlains100,
    this.desorock100,
    this.tigersMaw100,
    this.dimForest100,
    this.gorgesArea100,
    this.guixuiArea100,
    this.jinzhouArea100,
    this.NortfallArea100,
    this.wimingArea100,
    this.Whummingbay_area,
    this.Firmament_area,
    this.BlackShore,
    this.BlackShore_Under,
    this.MuterFly_All_in_One,
  ];
}
exports.ModTpFile = ModTpFile;
