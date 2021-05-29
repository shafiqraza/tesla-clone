import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import menuReducer from "./menu/menu-slice";
import logger from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
  middleware: middlewares,
});
