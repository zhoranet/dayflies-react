import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-calendar";

export function* fetchEventsPageSaga(action) {
	yield put(actions.fetchEventsPageStart());

	try {
		const res = yield axios.get(
			`events/en.json?orderBy="$key"&startAt="2"&limitToFirst=2`
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

		yield put(actions.fetchEventsPageSuccess(fetchedEvents));
	} catch (error) {
		yield put(actions.fetchEventsPageFail(error));
	}
}
