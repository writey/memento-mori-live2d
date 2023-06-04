import {Live2DCubismFramework as live2dcubismframework, Option as Csm_Option, LogLevel} from "/cubism/framework/src/live2dcubismframework";
import Csm_CubismFramework = live2dcubismframework.CubismFramework;  
import { CubismModelSettingJson } from '@framework/cubismmodelsettingjson';
import { CubismUserModel } from '@framework/model/cubismusermodel';

// 记录等选项设置。
let _cubismOption = new Csm_Option();

// 信息输出函数。
const printMessage = (message: string): void => {
  console.log(message);
}

class LAppModel extends CubismUserModel {
  public loadAssets(dir: string, fileName: string): void {

    // fetch(`${this._modelHomeDir}${fileName}`)
    fetch(`/resources/Haru/Haru.model3.json`)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        let buffer: ArrayBuffer = arrayBuffer;
        let size = buffer.byteLength;
        // 获取Json中描述的模型数据路径等
        let setting: ICubismModelSetting = new CubismModelSettingJson(buffer, size);
        // 保存结果
        this.setupModel(setting);
      });
  }

  setupModel(setting) {
    this._modelSetting = setting;
    let modelName: string = this._modelSetting.getModelFileName();
    let path = '/resources/Haru/' + modelName
    fetch(path).then((response) => {
      return response.arrayBuffer();
    }).then((arrayBuffer) => {
      let buffer = arrayBuffer;
      // 导入模型数据
      this.loadModel(buffer);
      // deleteBuffer(buffer, path);
    });
    
  }
}

export function init() {
  // 设置记录输出级别。在LogLevel_Verbose的情况下，输出详细记录。
  _cubismOption.logFunction = printMessage;
  _cubismOption.loggingLevel = LogLevel.LogLevel_Verbose;
  // 设置CubismNativeFramework原始化所需的参数。
  Csm_CubismFramework.startUp(_cubismOption);
    
  // 原始化CubismFramework。
  Csm_CubismFramework.initialize();

  let app = new LAppModel()
  app.loadAssets('', '')
  let path = '/resources/Haru/Haru.model3.json'
}