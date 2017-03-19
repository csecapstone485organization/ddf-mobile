import { combineReducers } from 'redux'
import {
  REQUEST_WORKSPACES, RECEIVE_WORKSPACES,
  SELECT_WORKSPACE, REQUEST_RESULTS,
  RECEIVE_RESULTS, SELECT_RESULT,
  REQUEST_QUERIES, RECEIVE_QUERIES,
  SELECT_QUERY
} from '../actions/actions'

function selectedQuery(state = 'default', action) {
  switch (action.type) {
    case SELECT_QUERY:
      return action.query
    default:
      return state
  }
}

function selectedWorkspace(state = 'default', action) {
  switch (action.type) {
    case SELECT_WORKSPACE:
      return action.workspace
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedQuery,
  selectedWorkspace
})

export default rootReducer
