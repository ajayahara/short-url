import * as types from './actionTypes.js';
const dangerAlert=(message)=>{
    return {type:types.DANGER_ALERT,payload:message};
};
const successAlert=(message)=>{
    return {type:types.SUCCESS_ALERT,payload:message};
};
const errorAlert=(message)=>{
    return {type:types.ERROR_ALERT,payload:message};
};
const infoAlert=(message)=>{
    return {type:types.INFO_ALERT,payload:message};
};
const clearAlert=()=>{
    return {type:types.CLEAR_ALERT};
};

export {dangerAlert,infoAlert,successAlert,errorAlert,clearAlert}