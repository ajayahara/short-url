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
const generatePostSuccess = ({newUrl}) => {
  return { type: types.GENERATE_POST_SUCCESS,payload:{newUrl} };
};

const urlsGetRequest = () => {
  return { type: types.URLS_GET_REQUEST };
};
const urlsGetError = ({ message }) => {
  return { type: types.URLS_GET_ERROR, payload: { message } };
};
const urlsGetSuccess = ({urls}) => {
  return { type: types.URLS_GET_SUCCESS,payload:{urls} };
};

// const urlsEditRequest = () => {
//   return { type: types.URLS_EDIT_REQUEST };
// };
// const urlsEditError = ({ message }) => {
//   return { type: types.URLS_EDIT_ERROR, payload: { message } };
// };
// const urlsEditSuccess = () => {
//   return { type: types.URLS_EDIT_SUCCESS };
// };

// const urlsDeleteRequest = () => {
//   return { type: types.URLS_DELETE_REQUEST };
// };
// const urlsDeleteError = ({ message }) => {
//   return { type: types.URLS_DELETE_ERROR, payload: { message } };
// };
// const urlsDeleteSuccess = () => {
//   return { type: types.URLS_DELETE_SUCCESS };
// };

const detailsGetRequest = () => {
  return { type: types.DETAILS_GET_REQUEST };
};
const detailsGetError = ({ message }) => {
  return { type: types.DETAILS_GET_ERROR, payload: { message } };
};
const detailsGetSuccess = ({urlDetails}) => {
  return { type: types.DETAILS_GET_SUCCESS,payload:{urlDetails} };
};
const visitorsGetRequest = () => {
  return { type: types.VISITORS_GET_REQUEST};
};
const visitorsGetError = ({ message }) => {
  return { type: types.VISITORS_GET_ERROR, payload: { message } };
};
const visitorsGetSuccess = ({visitors}) => {
  return { type: types.VISITORS_GET_SUCCESS,payload:{visitors} };
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
    dispatch(generatePostSuccess({newUrl:response.data.newUrl}));
  } catch (err) {
    const {error,message}=err.response.data;
    dispatch(generatePostError({message:error||message||'Error In Server'}));
  }
};

const getAllUrls = (page) =>async (dispatch,getState) => {
  const token=getState().authReducer.token;
  try {
    dispatch(urlsGetRequest());
    const response = await axios.get(`${server}/url/get/all?page=${page}`,axiosConfig(token));
    dispatch(urlsGetSuccess({urls:response.data.shortUrls}));
  } catch (err) {
    const {error,message}=err.response.data;
    dispatch(urlsGetError({message:error||message||'Error In Server'}));
  }
};

const editShortUrl = (formData) => (dispatch) => {};

const deleteShortUrl = (id) => (dispatch) => {};

const detailsOfShortUrl = (id) => async (dispatch,getState) => {
  const token=getState().authReducer.token;
  try {
    dispatch(detailsGetRequest());
    const response = await axios.get(`${server}/url/get/${id}`,axiosConfig(token));
    dispatch(detailsGetSuccess({urlDetails:response.data.shortUrl}));
  } catch (err) {
    const {error,message}=err.response.data;
    dispatch(detailsGetError({message:error||message||'Error In Server'}));
  }
};

const getAllVisitors = (id,page) =>async (dispatch,getState) => {
  const token=getState().authReducer.token;
  try {
    dispatch(visitorsGetRequest());
    const response = await axios.get(`${server}/visitors/get/${id}?page=${page}`,axiosConfig(token));
    dispatch(visitorsGetSuccess({visitors:response.data.visitors}));
  } catch (err) {
    const {error,message}=err.response.data;
    dispatch(visitorsGetError({message:error||message||'Error In Server'}));
  }
};

export {
  generateShortUrl,
  getAllUrls,
  editShortUrl,
  deleteShortUrl,
  detailsOfShortUrl,
  getAllVisitors,
};
