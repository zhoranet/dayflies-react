import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-calendar";

export function* fetchEventsPageSaga(action) {
	yield put(actions.fetchEventsPageStart(action.pageIndex));

	try {
		const res = yield axios.get(
			`events/en.json?orderBy="$key"&startAt="${action.pageIndex}"&limitToFirst=${Math.abs(action.pageSize)}`
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

		yield put(actions.fetchEventsPageSuccess(action.pageIndex + action.pageSize, fetchedEvents));
	} catch (error) {
		yield put(actions.fetchEventsPageFail(error));
	}
}
