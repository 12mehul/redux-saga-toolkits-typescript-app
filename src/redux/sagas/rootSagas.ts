import { all } from "redux-saga/effects";
import { watcherRegister } from "./registerSaga";
import {
  watcherSingleUserDel,
  watcherSingleUserList,
  watcherSingleUserUpdate,
  watcherUserList,
} from "./userSaga";

export default function* rootSagas() {
  yield all([
    watcherRegister(),
    watcherUserList(),
    watcherSingleUserList(),
    watcherSingleUserUpdate(),
    watcherSingleUserDel(),
  ]);
}
