'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.ModTpFile = void 0);
const puerts_1 = require('puerts'),
  UE = require('ue'),
  Info_1 = require('../../../Core/Common/Info'),
  Log_1 = require('../../../Core/Common/Log'),
  ModManager_1 = require('../ModManager'),
  ModCustomTp_1 = require('./ModCustomTp');

const centralPlains100 = require('./data/100-exploration/central-plains');
const { desorock100 } = require('./data/100-exploration/desorock');
const { dimForest100 } = require('./data/100-exploration/dim-forest');
const { gorgesArea100 } = require('./data/100-exploration/georges-area');
const { guixui100 } = require('./data/100-exploration/guixui-area');
const { jinzhouArea100 } = require('./data/100-exploration/jinzhou-area');
const { NortfallArea100 } = require('./data/100-exploration/norfall-area');
const { wimingArea100 } = require('./data/100-exploration/wiming-area');
const Whummingbay_area = require('./data/100-exploration/whuming-bay');
const Firmament_area = require('./data/100-exploration/firmament');
const {
  BlackShore,
  BlackShore_Under,
} = require('./data/100-exploration/black-shore');
const MuterFly_All_in_One = require('./data/100-exploration/Mutterfly-aio');
const Cost_all = require('./function/cost-all');
const C1_farm = require('./function/c1-farm');
const {
  Fusion,
  Aero,
  Glacio,
  Void_thunder,
  Havoc,
  Moonlith,
  Spectro,
  bossC4,
} = require('./function/farm-set');

class ModTpFile {
  // echos
  static bossC4 = bossC4();
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
  static centralPlains100 = centralPlains100();
  static desorock100 = desorock100();
  static tigersMaw100 = tigersMaw100();
  static dimForest100 = dimForest100();
  static gorgesArea100 = gorgesArea100();
  static guixuiArea100 = guixui100();
  static jinzhouArea100 = jinzhouArea100();
  static NortfallArea100 = NortfallArea100();
  static wimingArea100 = wimingArea100();
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
