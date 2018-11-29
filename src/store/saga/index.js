import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchEventsSaga } from "./events";
import { authUserSaga } from "./auth";
import { fetchOccasionsPageSaga, updateOccasionSaga } from "./occasions";

export function* watchCalendar() {
	yield takeEvery(actionTypes.FETCH_EVENTS, fetchEventsSaga);
}

export function* watchAuth() {
	yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}

export function* watchOccasions() {
	yield takeEvery(actionTypes.FETCH_OCCASIONS_PAGE, fetchOccasionsPageSaga);
	yield takeEvery(actionTypes.UPDATE_OCCASION, updateOccasionSaga);
}
