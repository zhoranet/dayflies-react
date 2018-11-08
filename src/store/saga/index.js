import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchEventsSaga } from "./calendar";
import { authUserSaga } from "./auth";

export function* watchCalendar() {
	yield takeEvery(actionTypes.FETCH_EVENTS, fetchEventsSaga);
}

export function* watchAuth() {
	yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}
