import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-calendar";

export function* updateOccasionSaga(action) {
	yield put(actions.updateOccasionStart());

	try {
		const response = yield axios.post("/occasions.json?auth=" + action.token, action.occasionDetails);
		yield put(actions.updateOccasionSuccess(response.data.occasionDetails));
	} catch (error) {
		yield put(actions.updateOccasionFail(error));
	}
}

export function* fetchOccasionsPageSaga(action) {
	yield put(actions.fetchOccasionsPageStart(action.pageIndex));

	try {
		const res = yield axios.get(
			`events/en.json?orderBy="$key"&startAt="${action.pageIndex}"&limitToFirst=${Math.abs(
				action.pageSize
			)}`
		);
		const fetchedEvents = [];
		for (let key in res.data) {
			if (res.data[key]) {
				fetchedEvents.push({
					...res.data[key],
					id: key
				});
			}
		}
		yield put(actions.fetchOccasionsPageSuccess(action.pageIndex + action.pageSize, fetchedEvents));
	} catch (error) {
		yield put(actions.fetchOccasionsPageFail(error));
	}
}
