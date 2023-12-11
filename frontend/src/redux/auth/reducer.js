import * as types from './actionType.js'
const initialState={
    isLoginLoading:false,
    isLoginError:false,
    errorLoginMessage:null,
    isLoggedin:false,
    token:null,
    isRegisterLoading:false,
    isRegisterError:false,
    errorRegisterMessaage:null
}
export const reducer=(state=initialState,action)=>{
    const {type,payload}=action
    console.log(type,payload);
    switch (type) {
        case types.AUTH_POST_REQUEST:
            return {...state,isLoginLoading:true,isLoginError:false,errorLoginMessage:null};
        case types.AUTH_POST_ERROR:
            return {...state,isLoginLoading:false,isLoginError:true,errorLoginMessage:payload};
        case types.AUTH_POST_SUCCESS:
            return {...state,isLoginLoading:false,isLoginError:false,errorLoginMessage:null,token:payload};
        case types.AUTH_LOGOUT:
            return {...initialState};
        case types.REGISTER_POST_REQUEST:
            return {...state,isRegisterLoading:true,isRegisterError:false,errorRegisterMessaage:null};
        case types.REGISTER_POST_ERROR:
            return {...state,isRegisterLoading:false,isRegisterError:true,errorRegisterMessaage:payload};
        case types.REGISTER_POST_SUCCESS:
            return {...initialState};
        default:
          return state;
      }
}