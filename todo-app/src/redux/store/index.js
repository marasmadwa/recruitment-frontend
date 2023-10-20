import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../reducers/root";

const store = configureStore({ reducer: allReducers });

export default store;
