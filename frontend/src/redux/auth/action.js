import axios from "axios";
import * as types from "./actionType.js";
import { server } from "../../utils/environment.js";
const loginPostRequest = () => {
  return { type: types.LOGIN_POST_REQUEST };
};
const loginPostError = (errorMessage) => {
  return { type: types.LOGIN_POST_ERROR, payload: errorMessage };
};
const loginPostSuccess = (token) => {
  return { type: types.LOGIN_POST_SUCCESS, payload: token };
};
const registerPostRequest = () => {
  return { type: types.REGISTER_POST_REQUEST };
};
const registerPostError = (errorMessage) => {
  return { type: types.REGISTER_POST_ERROR, payload: errorMessage };
};
const registerPostSuccess = () => {
  return { type: types.REGISTER_POST_SUCCESS };
};
const loginLogout = () => {
  return { type: types.LOGIN_LOGOUT };
};

const loginPost = (formData) => async (dispatch) => {
  dispatch(loginPostRequest());
  try {
    const response = await axios.post(`${server}/auth/login`, formData);
    dispatch(loginPostSuccess(response.data));
    localStorage.setItem('user',JSON.stringify(response.data));
  } catch (error) {
    dispatch(loginPostError(error.response.data?.message||error.response.data?.error||'Server Connection Error'))
  }
};
const registerPost = (formData) =>async (dispatch) => {
    dispatch(registerPostRequest());
    try {
      const response=await axios.post(`${server}/auth/register`, formData);
      if(response?.status==200){
        alert('User Already Exist');
      }
      if(response?.status==201){
        alert('User registration SuccessFull')
      }
      dispatch(registerPostSuccess())
    } catch (error) {
      dispatch(registerPostError(error.response.data?.message||error.response.data?.error||'Server Connection Error'))
    }
  };
const logOut=()=>(dispatch)=>{
    localStorage.removeItem('user');
    dispatch(loginLogout());
};
export { loginPost,logOut,registerPost };
