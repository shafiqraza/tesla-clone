import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [logger],
});
