import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchEventsSaga } from "./calendar";

export function* watchCalendar() {
	yield takeEvery(actionTypes.FETCH_EVENTS, fetchEventsSaga);
}
