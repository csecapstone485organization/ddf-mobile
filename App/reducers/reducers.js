import { combineReducers } from 'redux'
import {
  REQUEST_WORKSPACES, RECEIVE_WORKSPACES,
  SELECT_WORKSPACE, REQUEST_RESULTS,
  RECEIVE_RESULTS, SELECT_RESULT
} from '../actions/actions'

function selectedWorkspace(state = 'default', action) {
  switch (action.type) {
    case SELECT_WORKSPACE:
      return action.workspace
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedWorkspace
})

export default rootReducer
