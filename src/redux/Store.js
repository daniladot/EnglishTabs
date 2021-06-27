import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import reducer from "./reducer/index"

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
console.log('store', store.getState())

export default store

// export const getState = store.getState()