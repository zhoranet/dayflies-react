import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-api";

export function* updateOccasionSaga(action) {
	yield put(actions.updateOccasionStart());

	try {
		const response = yield axios.post("/occasions", action.occasionDetails);
		yield put(actions.updateOccasionSuccess(response.data.occasionDetails));
	} catch (error) {
		yield put(actions.updateOccasionFail(error));
	}
}

export function* fetchOccasionsPageSaga(action) {
	yield put(actions.fetchOccasionsPageStart(action.pageIndex));

	try {
		const res = yield axios.get(`/occasions?page="${action.pageIndex}"`);

		console.log("res", res);

		const fetchedEvents = [];
		for (let index in res.data) {
			if (res.data[index]) {
				fetchedEvents.push({
					...res.data[index],
					id: res.data[index]._id
				});
			}
		}
		yield put(actions.fetchOccasionsPageSuccess(action.pageIndex + action.pageSize, fetchedEvents));
	} catch (error) {
		yield put(actions.fetchOccasionsPageFail(error));
	}
}
