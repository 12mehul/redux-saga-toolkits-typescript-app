import { all } from "redux-saga/effects";
import { watcherRegister } from "./registerSaga";
import { watcherSingleUserList, watcherUserList } from "./userSaga";

export default function* rootSagas() {
  yield all([watcherRegister(), watcherUserList(), watcherSingleUserList()]);
}
