import { combineReducers } from 'redux'

import rooms from './rooms'
import auth from './auth'

export default combineReducers({ rooms, auth })