import { combineReducers } from 'redux'
import UserReducer from './user/user_reducer'

const rootReducer = combineReducers({
  user: UserReducer
})

export default rootReducer
