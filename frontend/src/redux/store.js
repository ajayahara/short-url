import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducer as authReducer} from './auth/reducer.js'
import {reducer as urlReducer} from './auth/reducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const rootReducer=combineReducers({authReducer,urlReducer})
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))