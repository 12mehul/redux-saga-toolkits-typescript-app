import { all } from "redux-saga/effects";
import { watcherRegister } from "./registerSaga";

export default function* rootSagas() {
  yield all([watcherRegister()]);
}
