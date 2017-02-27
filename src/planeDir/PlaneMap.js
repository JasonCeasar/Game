/**
 * Created by tudouhu on 2017/2/20.
 */

import 'createjs';
import GameData from '../manager/GameData';
import Prop from './Prop';
import HeroPlane from './HeroPlane';
import Router from '../common/socket/Router';
import NameSpr from '../common/NameSpr';
import SocketClient from '../common/socket/SocketClient';

/**
 * 飞机游戏地图
 */
class PlaneMap extends createjs.Container{

  /**
   * 地图
   * @type {createjs.Sprite}
   */
  mapS;
  /**
   * 道具数组
   * @type {Array}
   */
  propArr=[];
  /**
   * 道具类型
   * @type Array
   */
  propTypeArr=['p_bullet','p_gasoline','p_life'];

  constructor() {
    super();
    this.init();
  }

  /**
   * 初始化
   */
  init() {
    let data={
      images:['assets/img/gameBg.png'],
      frames:[[0,0,2000,2000]]
    }
    /**
     * 地图
     */
    this.mapS=new createjs.Sprite(new createjs.SpriteSheet(data),0);
    this.addChild(this.mapS);

    // for(let i=sprNameArr.length-1;i>=0;i--){
    //   let sn=sprNameArr[i];
    //   for(let n=0;n<2;n++){
    //     let prop=new Prop();
    //     prop.setMc(sn);
    //     this.addChild(prop);
    //     this.propArr.push(prop);
    //   }
    // }
    Router.instance.reg(Router.KPI.planProp,this.socketProp);
  }

  //接受服务器的socketProp数据 飞机道具
  socketProp = (data)=>{
    console.log('接收飞机道具数据：',data);
    if(this.propArr.length==0){
      let pa=GameData.propArr;
      let length=pa.length;
      for(let i=0;i<length;i++){
        let p=pa[i];
        let prop=new Prop();
        prop.setMc(this.propTypeArr[p.type]);
        prop.x=p.x;
        prop.y=p.y;
        prop.id=p.id;
        this.addChild(prop);
        this.propArr.push(prop);
      }
    }
    else {
      let length=this.propArr.length;
      for(let i=0;i<length;i++){
        let prop=this.propArr[i];
        if(prop.id==data.id){
          prop.x=p.x;
          prop.y=p.y;
        }
      }
    }
  }


  /**
   * 帧频函数
   * @param e
   */
  onFrame=(e)=>{

  }

  /**
   * 道具与飞机碰撞检测
   * @param plane {HeroPlane}
   */
  propHit(plane){
    let r1=NameSpr.rectGlobal(plane);
    for(let i=this.propArr.length-1;i>=0;i--){
      let r2=NameSpr.rectGlobal(this.propArr[i]);
      if(r1.intersects(r2)){
        //碰撞了
        this.propArr[i].planeHit(plane);
        SocketClient.instance.send({KPI:Router.KPI.planProp,id:this.propArr[i].id});
        break;
      }
    }
  }

  /**
   * 移除
   */
  remove(){
    if(this.parent!=null)
      this.parent.removeChild(this);
  }


}
export default PlaneMap;
