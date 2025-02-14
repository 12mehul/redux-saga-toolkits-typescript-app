import { call, put, takeEvery } from "redux-saga/effects";
import {
  singleUserDelService,
  singleUserService,
  userService,
} from "../services/userService";
import { IUsersList } from "../types/IUsersList";
import {
  singleUserDelRequest,
  singleUserDelSuccess,
  singleUserRequest,
  singleUserSuccess,
  userFailure,
  userRequest,
  userSuccess,
} from "../slices/userSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* userSaga() {
  try {
    const res: IUsersList[] = yield call(userService);
    yield put(userSuccess(res));
  } catch (error) {
    yield put(userFailure(error));
  }
}

function* singleUserSaga(action: PayloadAction<number>) {
  try {
    const res: IUsersList = yield call(singleUserService, action.payload);
    yield put(singleUserSuccess(res));
  } catch (error) {
    yield put(userFailure(error));
  }
}

function* singleUserDelSaga(action: PayloadAction<number>) {
  try {
    yield call(singleUserDelService, action.payload);
    yield put(singleUserDelSuccess("User Deleted Successfully!"));
    yield put(userRequest()); // Refresh users
  } catch (error) {
    yield put(userFailure(error));
  }
}

export function* watcherUserList() {
  yield takeEvery(userRequest().type, userSaga);
}

export function* watcherSingleUserList() {
  yield takeEvery(singleUserRequest, singleUserSaga);
}

export function* watcherSingleUserDel() {
  yield takeEvery(singleUserDelRequest, singleUserDelSaga);
}
