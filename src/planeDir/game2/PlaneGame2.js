
/**
 * Created by tudouhu on 2017/2/7.
 */

import 'createjs';
import Timer from '../../common/Timer';
import Router from '../../common/socket/Router';
import SocketClient from '../../common/socket/SocketClient';
import UserData from '../../manager/UserData';
import GameData from '../../manager/GameData';
import PSData from '../../manager/PSData';
import PlaneControl2 from './PlaneControl2';
import DataShow from '../interface/DataShow';
import PlaneMap2 from './PlaneMap2';
import MyEvent from '../../common/MyEvent';
import PlaneGameB from '../gameBase/PlaneGameB';

/**
 * 飞机大战游戏多人模式
 */
class PlaneGame2 extends PlaneGameB{

  /**
   * 飞机地图
   * @type {PlaneMap2}
   */
  map=null;
  /**
   * FPS ping显示
   * @type {DataShow}
   */
  dataShow=null;
  /**
   * 飞机管理
   * @type {PlaneControl2}
   */
  planeControl=null;

  constructor(){
    super();
    this.init();
  }

  /**
   * 初始化
   */
  init(){
    //地图
    this.map=new PlaneMap2();
    this.addChild(this.map);
    GameData.planeMap=this.map;
    //飞机管理
    this.planeControl=new PlaneControl2();
    this.addChild(this.planeControl);
    GameData.planeControl=this.planeControl;
    //数据显示
    this.dataShow=new DataShow();
    GameData.dataShow=this.dataShow;
  }





  /**
   * 移除
   */
  remove(){
    super.remove();
  }

}


export default PlaneGame2;
