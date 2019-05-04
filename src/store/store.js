import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import formReducer from "../reducers/form-reducer.js";

let reducers = combineReducers({
  form: formReducer,
});

const store = () => createStore(reducers, composeWithDevTools());
export default store;