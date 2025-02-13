import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSagas from "../sagas/rootSagas";
import regReducer from "../slices/registerSlice";
import userReducer from "../slices/userSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    register: regReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;

export default store;
