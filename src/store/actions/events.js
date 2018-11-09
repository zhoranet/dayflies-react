import * as actionTypes from "./actionTypes";

export const fetchEventsPage = (pageIndex, pageSize) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE,
		pageIndex: pageIndex,
		pageSize: pageSize
	};
};

export const fetchEventsPageStart = (pageIndex) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_START,
		pageIndex: pageIndex
	};
};

export const fetchEventsPageSuccess = (pageIndex, page) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_SUCCESS,
		page: page,
		pageIndex: pageIndex
	};
};

export const fetchEventsPageFail = (error) => {
	return {
		type: actionTypes.FETCH_EVENTS_PAGE_FAIL,
		error: error
	};
};