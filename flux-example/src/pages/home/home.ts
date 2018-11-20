import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {userAction} from "../../framework/action/userAction";
import {ActionType} from "../../framework/action/actionType";

// declare var $;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private userName: string;
  private passWord: string;

  constructor(public navCtrl: NavController) {

  }

  login() {
    // this.userName = $('#userName_input').val();
    // this.passWord = $('#pwd_input').val();

    var action = new userAction(ActionType.ACTION_TYPE_LOGIN);
    action.username = "fgferg";
    action.password = "8888";
    action.callback = (error, response) => {
      if (error == null && response) {
        console.log("login result:  " + response);
      }
    };

    action.dispatch();

  }

}
