import { createStore } from 'redux'

export const reducer = (state = 0, action) => {
    return state;
}

let store = createStore(reducer);

export default store;
