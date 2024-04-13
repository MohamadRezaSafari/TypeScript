import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { batreducer, padreducer } from "/productReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { Reducer } from "../img/reducer";

const rootreducer = combineReducers({
  bat: batreducer,
  pad: padreducer,
  imglist: Reducer,
});

const store = configureStore({
  reducer: rootreducer,
  middleware: [logger, thunk],
});

export default store;
