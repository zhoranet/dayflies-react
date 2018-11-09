import * as actionTypes from "./actionTypes";

export const fetchEventsPage = (pageIndex) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE,
		index: pageIndex
	};
};

export const fetchEventsPageStart = (pageIndex) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_START
	};
};

export const fetchEventsPageSuccess = (page) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_SUCCESS,
		page: page
	};
};

export const fetchEventsPageFail = (error) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_FAIL,
		error: error
	};
};