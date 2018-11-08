import * as actionTypes from "./actionTypes";

export const fetchEventsPage = (pageIndex) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE,
		index: pageIndex
	};
};
