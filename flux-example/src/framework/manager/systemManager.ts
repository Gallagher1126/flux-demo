import {userManager} from "./userManager";

export class systemManager {

  constructor() {
  }

  static register() {
    userManager.getInstance().registerDispatcher();
  }

  static unRegister() {
  }

}
