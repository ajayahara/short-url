import * as types from "./actionTypes.js";
import axios from "axios";
const server = import.meta.env.VITE_SERVER;
// Action Objects
const generatePostRequest = () => {
  return { type: types.GENERATE_POST_REQUEST };
};
const generatePostError = ({ message }) => {
  return { type: types.GENERATE_POST_ERROR, payload: { message } };
};
const generatePostSuccess = () => {
  return { type: types.GENERATE_POST_SUCCESS };
};

const urlsGetRequest = () => {
  return { type: types.URLS_GET_REQUEST };
};
const urlsGetError = ({ message }) => {
  return { type: types.URLS_GET_ERROR, payload: { message } };
};
const urlsGetSuccess = () => {
  return { type: types.URLS_GET_SUCCESS };
};

const urlsEditRequest = () => {
  return { type: types.URLS_EDIT_REQUEST };
};
const urlsEditError = ({ message }) => {
  return { type: types.URLS_EDIT_ERROR, payload: { message } };
};
const urlsEditSuccess = () => {
  return { type: types.URLS_EDIT_SUCCESS };
};

const urlsDeleteRequest = () => {
  return { type: types.URLS_DELETE_REQUEST };
};
const urlsDeleteError = ({ message }) => {
  return { type: types.URLS_DELETE_ERROR, payload: { message } };
};
const urlsDeleteSuccess = () => {
  return { type: types.URLS_DELETE_SUCCESS };
};

const detailsGetRequest = () => {
  return { type: types.DETAILS_GET_REQUEST };
};
const detailsGetError = ({ message }) => {
  return { type: types.DETAILS_GET_ERROR, payload: { message } };
};
const detailsGetSuccess = () => {
  return { type: types.DETAILS_GET_SUCCESS };
};
// Axios Config
const axiosConfig=(token)=>{
    return {
        headers: {
          "Content-Type": "application/json",
          authorizationtoken: token,
        },
      };
}
// Actions
const generateShortUrl = (formData) => async (dispatch,getState) => {
    const token=getState().authReducer.token;
  try {
    dispatch(generatePostRequest());
    const response = await axios.post(`${server}/url/create`, formData,axiosConfig(token));
    console.log(response);
    dispatch(generatePostSuccess());
  } catch (err) {
    console.log(err);
    const {error,message}=err.response.data;
    dispatch(generatePostError({message:error||message||'Error In Server'}));
  }
};

const getAllUrls = () => (dispatch) => {};

const editShortUrl = (formData) => (dispatch) => {};

const deleteShortUrl = (id) => (dispatch) => {};

const detailsOfShortUrl = (id) => (dispatch) => {};

const getAllVisitors = (id) => (dispatch) => {};

export {
  generateShortUrl,
  getAllUrls,
  editShortUrl,
  deleteShortUrl,
  detailsOfShortUrl,
  getAllVisitors,
};
