export const REQUEST_WORKSPACES = 'REQUEST_WORKSPACES';
export const RECEIVE_WORKSPACES = 'RECEIVE_WORKSPACES';
export const SELECT_WORKSPACE = 'SELECT_WORKSPACE';

export const REQUEST_QUERIES = 'REQUEST_QUERIES';
export const RECEIVE_QUERIES = 'RECEIVE_QUERIES';
export const SELECT_QUERY = 'SELECT_QUERY';

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const SELECT_RESULT = 'SELECT_RESULT';

export function requestWorkspaces(user) {
  return {
    type: REQUEST_WORKSPACES,
    user
  }
}

export function selectWorkspace(workspace) {
  return {
    type: SELECT_WORKSPACE,
    workspace
  }
}

export function requestQueries(workspace) {
  return {
    type: REQUEST_QUERIES,
    workspace
  }
}

export function selectQuery(query) {
  return {
    type: SELECT_QUERY,
    query
  }
}

export function requestResults(query) {
  return {
    type: REQUEST_RESULTS,
    query
  }
}

export function receiveResults(query, json) {
  console.log(json);
  return {
    type: RECEIVE_RESULTS,
    query,
    results: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function selectResult(result) {
  return {
    type: SELECT_RESULT,
    result
  }
}

export function fetchResults(query) {

  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestResults(query))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://www.reddit.com/r/news.json`)
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveResults(query, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}
