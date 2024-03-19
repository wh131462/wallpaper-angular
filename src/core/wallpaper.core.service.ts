import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:"root"
})
export class WallpaperCoreService{
  /**
   * 处理器 - 可以对一个属性定义多个处理函数 会序执行
   */
  handler: Record<string, Array<(value:any)=>void>> = {};
  /**
   * 数组的值
   * @private
   */
  private audioArray$: BehaviorSubject<Array<number>> = new BehaviorSubject<Array<number>>([]);

  constructor() {
    this.initListener()
  }

  /**
   * 设置 handler
   * @param property
   * @param cb
   */
  setHandler(property:string, cb: (value:any)=>void){
    if(!this.handler[property])this.handler[property] = []
    this.handler[property].push(cb);
  }

  /**
   * 获取回调数组
   * @param property
   */
  getHandler(property:string){
    return this.handler[property]
  }
  /**
   * 初始化监听器
   */
  initListener(){
    // 属性监听器
    window.wallpaperPropertyListener = {
      // 应用用户属性的时候
      applyUserProperties:(properties: { [p: string]: any }) => {
        this.executeAll(properties);
      },
      // 应用通用属性的时候
      applyGeneralProperties:(properties: { [p: string]: any; fps?: number })=>{
        this.executeAll(properties);
      }
    }

    window.wallpaperRegisterAudioListener(this.syncAudio.bind(this))
  }

  /**
   * 同步音频数组的值到Subject
   * @private
   */
  private syncAudio(audioArray:Array<number>){
    this.audioArray$.next(audioArray)
  }

  /**
   * 执行传入属性对象的全部回调
   * @param properties
   * @private
   */
  private executeAll(properties: { [p: string]: any }) {
    Object.entries(properties).forEach(([key,value])=>{
      if(!this.handler[key]){
        console.warn(`[core] handler for [ ${key} ] has no register.`)
        return;
      }
      for (const handler of this.handler[key]) {
        handler?.(value)
      }
    })
  }
}
