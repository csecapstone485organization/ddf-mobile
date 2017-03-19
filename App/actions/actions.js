export const REQUEST_WORKSPACES = 'REQUEST_WORKSPACES';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';
export const SELECT_WORKSPACE = 'SELECT_WORKSPACE';

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const SELECT_RESULT = 'SELECT_RESULT';

export function selectWorkspace(workspace) {
  return {
    type: SELECT_WORKSPACE,
    workspace
  }
}

export function requestWorkspaces(user) {
  return {
    type: REQUEST_WORKSPACES,
    user
  }
}

export function requestResults(query) {
  return {
    type: REQUEST_RESULTS,
    query
  }
}

export function selectResult(result) {
  return {
    type: SELECT_RESULT,
    result
  }
}
