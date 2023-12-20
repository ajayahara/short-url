import * as types from './actionTypes.js';

const initialState={
    message:null,
    messageType:null
}
export const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.DANGER_ALERT:
            return {...state,message:payload.message,messageType:'danger'};
        case types.INFO_ALERT:
            return {...state,message:payload.message,messageType:'info'};
        case types.SUCCESS_ALERT:
            return {...state,message:payload.message,messageType:'success'};
        case types.ERROR_ALERT:
           return {...state,message:payload.message,messageType:'error'};
        case types.CLEAR_ALERT:
            return initialState;
        default:
            return {...state}
    }
}