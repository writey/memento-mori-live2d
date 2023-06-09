/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { LAppDelegate } from './lappdelegate';
import * as LAppDefine from './lappdefine';
import { LAppLive2DManager } from './lapplive2dmanager';
/**
 * ブラウザロード後の処理
 */
export function init(element, modelId, onGetMotions) {
    // create the application instance
    LAppDefine.setGetMotionCb(onGetMotions)
  if (LAppDelegate.getInstance().initialize(element) == false) {
    return;
  }

  LAppDelegate.getInstance().run();


  /**
   * 終了時の処理
   */
  window.onbeforeunload = (): void => LAppDelegate.releaseInstance();

  /**
   * Process when changing screen size.
   */
  window.onresize = (element) => {
    if (LAppDefine.CanvasSize === 'auto') {
      LAppDelegate.getInstance().onResize(element);
    }
  };
}

export function startMotion(motionName: string) {
  LAppDefine.changeMotionGroupIdle(motionName)
  LAppDelegate.getInstance().changeMotion(motionName)
}

export function destroy() {
  LAppDelegate.getInstance().release()
  window.onbeforeunload = null
  window.onresize = null
}

export function changeModel(modelId) {
  LAppDefine.changeModlDir(modelId)
  LAppLive2DManager.getInstance().changeScene(0)
}