import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
	pageIndex: 0,
	page: [],
	loading: false,
	error: null
};

const fetchEventsPageStart = (state, action) => {
	return updateObject(state, { 
		loading: true, 
		pageIndex: action.pageIndex, 
	});
};

const fetchEventsPageSuccess = (state, action) => {
	return updateObject(state, {
		page: action.page,
		pageIndex: action.pageIndex,
		loading: false,		
	});
};

const fetchEventsPageFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false
	});
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_EVENTS_PAGE_START:
			return fetchEventsPageStart(state, action);
		case actionTypes.FETCH_EVENTS_PAGE_SUCCESS:
			return fetchEventsPageSuccess(state, action);
		case actionTypes.FETCH_EVENTS_PAGE_FAIL: 
			return fetchEventsPageFail(state, action);
		default:
			return state;
	}
};

export default reducer;
