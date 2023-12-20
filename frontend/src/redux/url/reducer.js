import * as types from "./actionTypes";
const initialState = {
  genUrl:null,
  isGenerateLoading: false,
  isGenerateError: false,
  errorGenerateMessage: null,

  isUrlsLoading: false,
  isUrlsError: false,
  errorUrlsMessage: null,
  urls: [],

  isEditUrlsLoading: false,
  isEditUrlsSuccess:false,
  isEditUrlsError: false,
  errorEditUrlsMessage: null,

  isDeleteUrlsLoading: false,
  isDeleteUrlsSuccess:false,
  isDeleteUrlsError: false,
  errorDeleteUrlsMessage: null,

  isVisitorsloading: false,
  isVisitorsError: false,
  errorVisitorsMessage: null,
  visitors: [],

  isDetailsLoading: false,
  isDetailsError: false,
  errorDetailsMessage: null,
  urlDetails: null,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // GENERATE_POST cases
    case types.GENERATE_POST_REQUEST:
      return {
        ...state,
        isGenerateLoading: true,
        isGenerateError: false,
        errorGenerateMessage: null,
      };
    case types.GENERATE_POST_ERROR:
      return {
        ...state,
        isGenerateLoading: false,
        isGenerateError: true,
        errorGenerateMessage: payload.message,
      };
    case types.GENERATE_POST_SUCCESS:
      return {
        ...state,
        isGenerateLoading: false,
        isGenerateError: false,
        errorGenerateMessage: null,
        genUrl:payload.newUrl
      };
    case types.CLEAR_GENURL:
      return {
        ...state,
        genUrl:null
      }
    // URLS_GET cases
    case types.URLS_GET_REQUEST:
      return {
        ...state,
        isUrlsLoading: true,
        isUrlsError: false,
        errorUrlsMessage: null,
      };
    case types.URLS_GET_ERROR:
      return {
        ...state,
        isUrlsLoading: false,
        isUrlsError: true,
        errorUrlsMessage: payload.message,
        urls: [],
      };
    case types.URLS_GET_SUCCESS:
      return {
        ...state,
        isUrlsLoading: false,
        isUrlsError: false,
        errorUrlsMessage: null,
        urls: payload.urls,
      };

    // URLS_EDIT cases
    case types.URLS_EDIT_REQUEST:
      return {
        ...state,
        isEditUrlsLoading: true,
        isEditUrlsError: false,
        errorEditUrlsMessage: null,
      };
    case types.URLS_EDIT_ERROR:
      return {
        ...state,
        isEditUrlsLoading: false,
        isEditUrlsError: true,
        errorEditUrlsMessage: payload.message,
      };
    case types.URLS_EDIT_SUCCESS:
      return {
        ...state,
        isEditUrlsSuccess:true,
        isEditUrlsLoading: false,
        isEditUrlsError: false,
        errorEditUrlsMessage: null,
      };
    case types.CLEAR_EDIT_SUCCESS:
      return {
        ...state,
        isEditUrlsSuccess:false
      }
    // URLS_DELETE cases
    case types.URLS_DELETE_REQUEST:
      return {
        ...state,
        isDeleteUrlsLoading: true,
        isDeleteUrlsError: false,
        errorDeleteUrlsMessage: null,
      };
    case types.URLS_DELETE_ERROR:
      return {
        ...state,
        isDeleteUrlsLoading: false,
        isDeleteUrlsError: true,
        errorDeleteUrlsMessage: payload.message,
      };
    case types.URLS_DELETE_SUCCESS:
      return {
        ...state,
        isDeleteUrlsSuccess:true,
        isDeleteUrlsLoading: false,
        isDeleteUrlsError: false,
        errorDeleteUrlsMessage: null,
      };
    case types.CLEAR_DELETE_SUCCESS:
      return {
        ...state,
        isDeleteUrlsSuccess:false
      };
    // VISITORS_GET cases
    case types.VISITORS_GET_REQUEST:
      return {
        ...state,
        isVisitorsloading: true,
        isVisitorsError: false,
        errorVisitorsMessage: null,
        visitors: [],
      };
    case types.VISITORS_GET_ERROR:
      return {
        ...state,
        isVisitorsloading: false,
        isVisitorsError: true,
        errorVisitorsMessage: payload.message,
      };
    case types.VISITORS_GET_SUCCESS:
      return {
        ...state,
        isVisitorsloading: false,
        isVisitorsError: false,
        errorVisitorsMessage: null,
        visitors: payload.visitors,
      };

    // DETAILS_GET cases
    case types.DETAILS_GET_REQUEST:
      return {
        ...state,
        isDetailsLoading: true,
        isDetailsError: false,
        errorDetailsMessage: null,
        urlDetails: null,
      };
    case types.DETAILS_GET_ERROR:
      return {
        ...state,
        isDetailsLoading: false,
        isDetailsError: true,
        errorDetailsMessage: payload.message,
      };
    case types.DETAILS_GET_SUCCESS:
      return {
        ...state,
        isDetailsLoading: false,
        isDetailsError: false,
        errorDetailsMessage: null,
        urlDetails: payload.urlDetails,
      };
    default:
      return state;
  }
};
