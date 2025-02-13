import { call, put, takeEvery } from "redux-saga/effects";
import { IRegister } from "../types/IRegister";
import { registerService } from "../services/registerService";
import { PayloadAction } from "@reduxjs/toolkit";
import { regError, regRequest, regSuccess } from "../slices/registerSlice";

function* registerSaga(action: PayloadAction<IRegister>) {
  try {
    const res: null = yield call(registerService, action.payload);
    yield put(regSuccess(res));
  } catch (error) {
    yield put(regError(error));
  }
}

export function* watcherRegister() {
  yield takeEvery(regRequest, registerSaga);
}
