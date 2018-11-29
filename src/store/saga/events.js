import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "../../axios-calendar";

const filterByDate = (events, date) => {
	let index = date.getDate() - 1;

	if (index > 15) index = index - 15;
	const randomSequence = "245913152879152614361725113313795819";
	let pair = randomSequence.substring(index * 2, index * 2 + 2);
	return events.filter(
		x =>
			parseInt(x.id, 10) >= parseInt(pair.charAt(0), 10) &&
			parseInt(x.id, 10) <= parseInt(pair.charAt(1), 10)
	);
};

export function* fetchEventsSaga(action) {
	yield put(actions.fetchEventsStart());
	
	try {
		const res = yield axios.get(`/events/${action.language}.json`);
		const fetchedEvents = [];
		for (let key in res.data) {
			fetchedEvents.push({
				...res.data[key],
				id: key
			});
		}

		const filteredEvents = filterByDate(fetchedEvents, action.date);

		yield put(actions.fetchEventsSuccess(action.date, action.language, filteredEvents));
	} catch (error) {
		yield put(actions.fetchEventsFail(error));
	}
}
