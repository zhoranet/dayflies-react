import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-calendar";

export function* fetchEventsPageSaga(action) {

	yield put(actions.fetchEventsStart());
	
	try {
		const res = yield axios.get(`/events/en.json?shallow=true`);
		const fetchedEvents = [];
		for (let key in res.data) {
			fetchedEvents.push({
				...res.data[key],
				id: key
			});
		}

		
		yield put(actions.fetchEventsSuccess(action.date, action.language, fetchedEvents));
	} catch (error) {
		yield put(actions.fetchEventsFail(error));
	}

}