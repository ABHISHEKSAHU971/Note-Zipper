import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { userLoginReducer } from "./Reducers/userReducer";

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

const initialState = {};
const middleware = [thunk];
const store = legacy_createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
