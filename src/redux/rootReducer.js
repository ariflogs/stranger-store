import {combineReducers} from 'redux'

import userReducer from './user/userReducer'
import chartReducer from './chart/chartReducer'

const rootReducer = combineReducers({
  user: userReducer,
  chart: chartReducer
})

export default rootReducer