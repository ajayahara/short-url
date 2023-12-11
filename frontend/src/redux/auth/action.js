import axios from "axios";
import * as types from "./actionType.js";
const server = import.meta.env.VITE_SERVER;
const loginPostRequest = () => {
  return { type: types.LOGIN_POST_REQUEST };
};
const loginPostError = (errorMessage) => {
  return { type: types.LOGIN_POST_ERROR, payload: errorMessage };
};
const auhPostSuccess = (token) => {
  return { type: types.LOGIN_POST_SUCCESS, payload: token };
};
const registerPostRequest = () => {
  return { type: types.REGISTER_POST_REQUEST };
};
const registerPostError = (errorMessage) => {
  return { type: types.REGISTER_POST_ERROR, payload: errorMessage };
};
const registerPostSuccess = (token) => {
  return { type: types.REGISTER_POST_SUCCESS };
};
const loginLogout = () => {
  return { type: types.LOGIN_LOGOUT };
};

const loginPost = (formData) => async (dispatch) => {
  dispatch(loginPostRequest());
  try {
    const resonse = await axios.post(`${server}/auth/login`, formData);
    console.log(resonse);
  } catch (error) {
    console.log(error);
  }
};
const registerPost = (formData) => async (dispatch) => {
    dispatch(registerPostRequest());
    try {
      const resonse = await axios.post(`${server}/auth/login`, formData);
      console.log(resonse);
    } catch (error) {
      console.log(error);
    }
  };
const logOut=()=>(dispatch)=>{
    dispatch(loginLogout())
}
export { loginPost,logOut,registerPost };
