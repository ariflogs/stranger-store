import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/userReducer'
import chartReducer from './chart/chartReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['chart']
};


const rootReducer = combineReducers({
  user: userReducer,
  chart: chartReducer
})

export default persistReducer(persistConfig, rootReducer)