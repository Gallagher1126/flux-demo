import {BaseAction} from "../baseflux/BaseAction";

export class userAction extends BaseAction {

  private _username: string;
  private _password: string;

  constructor(ActionType) {
    super(ActionType);
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

}
