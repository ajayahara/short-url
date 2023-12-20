import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer as authReducer} from './auth/reducer.js'
import {reducer as urlReducer} from './url/reducer.js'
import { reducer as alertReducer } from './alert/reducer.js'
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({authReducer,urlReducer,alertReducer});
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));