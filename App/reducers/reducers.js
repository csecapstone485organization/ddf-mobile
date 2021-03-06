import { combineReducers } from 'redux'
import {
  REQUEST_WORKSPACES, RECEIVE_WORKSPACES,
  SELECT_WORKSPACE, REQUEST_RESULTS,
  RECEIVE_RESULTS, SELECT_RESULT,
  REQUEST_QUERIES, RECEIVE_QUERIES,
  SELECT_QUERY
} from '../actions/actions'

function selectedQuery(state = {}, action) {
  switch (action.type) {
    case SELECT_QUERY:
      return action.query
    default:
      return state
  }
}

function selectedWorkspace(state = {}, action) {
  switch (action.type) {
    case SELECT_WORKSPACE:
      return action.workspace;
    default:
      return state;
  }
}

function selectedResult(state = {}, action) {
  switch (action.type) {
    case SELECT_RESULT:
      return action.result;
    default:
      return state;
  }
}

function results(state = {
  isFetching: false,
  didInvalidate: false,
  results: []
}, action) {
  switch (action.type) {
    case REQUEST_RESULTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_RESULTS:
      return Object.assign({}, state,
      {
        isFetching: false,
        didInvalidate: false,
        results: action.results,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedWorkspace,
  selectedQuery,
  selectedWorkspace,
  selectedResult,
  results,
})

export default rootReducer
