/**
 * Created by ruixin on 2017/2/16 0016.
 */

export default {

  /**
   * 舞台
   */
  stage:null,
  /**
   * 舞台宽
   */
  stageW:1366,
  /**
   * 舞台宽
   */
  stageH:768,
  /**
   * 地图宽
   */
  mapW:2000,
  /**
   * 地图宽
   */
  mapH:2000,

  /**
   * 是否需要发送数据
   */
  send:false,
  /**
   * 房间名
   */
  room:'',
  /**
   * 飞机名称
   */
  planeName:'A',
  /**
   * 商店数据数组
   * @type {Array}
   */
  shopArr:[],
  /**
   * 道具数组
   * @type {Array}
   */
  propArr:[],
  /**
   * AI飞机数组
   * @type {Array}
   */
  AIPlaneArr:[],
  /**
   * 上帧时间
   */
  lastTime:0,
  /**
   * 帧频时间差
   */
  timeDiff:0,

  /**
   * 飞机管理实例
   *  @type {PlaneControl}
   */
  planeControl:null,
  /**
   * 飞机地图实例
   *  @type {PlaneMap}
   */
  planeMap:null,
  /**
   * FPS ping显示
   * @type {DataShow}
   */
  dataShow:null,

  //按键
  key_A:false,
  key_D:false,
  key_W:false,
  key_S:false,
  key_J:false,



  /**
   * 飞机名对应飞机精灵名
   * @type {{*}}
   */
  planeNameO:{'A':'plane0','B':'plane1','C':'plane2','D':'plane3',
    'E':'plane4','F':'plane5',}

};
