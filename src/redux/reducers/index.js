import { combineReducers } from 'redux'
import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'
import { routerReducer } from 'react-router-redux'

import example      from './example'

const rootReducer = combineReducers({
  example,
  routing: routerReducer
});

export default rootReducer
