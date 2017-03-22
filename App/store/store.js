import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/reducers'
import thunkMiddleware from 'redux-thunk'

let store = createStore(rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default store;
