import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import exampleReducer from "./ducks/exampleReducer"

const rootReducer = combineReducers({
  exampleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
