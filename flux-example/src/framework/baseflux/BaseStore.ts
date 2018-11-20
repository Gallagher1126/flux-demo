
'use strict';
import {EventEmitter} from "./EventEmitter";
import {myDispatcher} from "./Dispatcher";

export abstract class BaseStore extends EventEmitter{

    private _dispatcherToken:any = null;

    registerDispatcher(){
        if(null == this._dispatcherToken){
            this._dispatcherToken = myDispatcher.register((action)=>{
                this._handleAction(action);
            });
        }
    }

    private _handleAction(action){
        if(this._checkAction(action)){
            this._doAction(action);
        }
    }

    /**
     * abstract function.子类实现
     * 检查Dispatcher分发的Action，是否本模块关心的Action
     * @param action
     * @protected
     * @returns {boolean}
     */
    protected _checkAction(action):boolean{
        return true;
    }

    /**
     * abstract function.子类实现
     * 处理Dispatcher分发的Action
     * @param action
     * @protected
     */
    protected _doAction(action){}

    unRegisterDispatcher(){
        if(null != this._dispatcherToken){
            myDispatcher.unregister(this._dispatcherToken);
            this._dispatcherToken = null;
            this.destroy();
        }
    }

    get dispatcherToken():any {
        return this._dispatcherToken;
    }

    abstract destroy();
}
