import {BaseStore} from "../baseflux/BaseStore";
import {ActionType} from "../action/actionType";
import {userAction} from "../action/userAction";

export class userManager extends BaseStore {

  private static _instance: userManager = null;

  constructor() {
    super();
    if (null != userManager._instance) {
      throw new Error("UserManager-> Error: 单例模式getInstance方法代替new.");
    }
  }

  static getInstance() {
    if (null == userManager._instance) {
      userManager._instance = new userManager();
    }
    return userManager._instance;
  }


  _doAction(action:userAction) {
    super._doAction(action);
    switch (action.actionType) {
      case ActionType.ACTION_TYPE_LOGIN:
        this._doLogin(action._callback)
        break;
    }
  }

  _doLogin(callback) {
    callback(null, "login success !");
  }


  destroy() {
    // UserManager._instance = null;
    userManager._instance = null;

  }


}
