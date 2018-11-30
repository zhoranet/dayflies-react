import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
	pageIndex: 0,
	page: [],
	loading: false,
	ocassionDetails: null,
	error: null
};

const fetchOccasionsPageStart = (state, action) => {
	return updateObject(state, {
		loading: true,
		pageIndex: action.pageIndex
	});
};

const fetchOccasionsPageSuccess = (state, action) => {
	return updateObject(state, {
		page: action.page,
		pageIndex: action.pageIndex,
		loading: false
	});
};

const fetchOccasionsPageFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false
	});
};
const updateOccasionStart = (state, action) => {
	return updateObject(state, {
		loading: true
	});
};

const updateOccasionSuccess = (state, action) => {
	return updateObject(state, {
		ocassionDetails: action.ocassionDetails,
		loading: false
	});
};

const updateOccasionFail = (state, action) => {
	return updateObject(state, {
		error: action.error,
		loading: false
	});
};

const selectOccasion = (state, action) => {
	return updateObject(state, {
		occasionDetails: action.occasionDetails
	});
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_OCCASIONS_PAGE_START:
			return fetchOccasionsPageStart(state, action);
		case actionTypes.FETCH_OCCASIONS_PAGE_SUCCESS:
			return fetchOccasionsPageSuccess(state, action);
		case actionTypes.FETCH_OCCASIONS_PAGE_FAIL:
			return fetchOccasionsPageFail(state, action);
		case actionTypes.UPDATE_OCCASION_START:
			return updateOccasionStart(state, action);
		case actionTypes.UPDATE_OCCASION_SUCCESS:
			return updateOccasionSuccess(state, action);
		case actionTypes.UPDATE_OCCASION_FAIL:
			return updateOccasionFail(state, action);
		case actionTypes.SELECT_OCCASION:
			return selectOccasion(state, action);
		default:
			return state;
	}
};

export default reducer;
