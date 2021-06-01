import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user-slice";
import menuReducer from "./menu/menu-slice";
import logger from "redux-logger";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./root-saga";
const sagaMiddleWare = createSagaMiddleWare();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
  },
  middleware: middlewares,
});

sagaMiddleWare.run(rootSaga);
