import * as actionTypes from "./actionTypes";

export const fetchOccasionsPage = (pageIndex, pageSize) => {
	return {
		type: actionTypes.FETCH_OCCASIONS_PAGE,
		pageIndex: pageIndex,
		pageSize: pageSize
	};
};

export const fetchOccasionsPageStart = pageIndex => {
	return {
		type: actionTypes.FETCH_OCCASIONS_PAGE_START,
		pageIndex: pageIndex
	};
};

export const fetchOccasionsPageSuccess = (pageIndex, page) => {
	return {
		type: actionTypes.FETCH_OCCASIONS_PAGE_SUCCESS,
		page: page,
		pageIndex: pageIndex
	};
};

export const fetchOccasionsPageFail = error => {
	return {
		type: actionTypes.FETCH_OCCASIONS_PAGE_FAIL,
		error: error
	};
};

export const updateOccasion = (token, occasionDetails) => {
	return {
		type: actionTypes.UPDATE_OCCASION,
		occasionDetails: occasionDetails,
		token: token
	};
};

export const selectOccasion = (occasionDetails) => {
	return {
		type: actionTypes.SELECT_OCCASION,
		occasionDetails: occasionDetails
	};
};

export const updateOccasionStart = () => {
	return {
		type: actionTypes.UPDATE_OCCASION_START
	};
};

export const updateOccasionSuccess = ocassionDetails => {
	return {
		type: actionTypes.UPDATE_OCCASION_SUCCESS,
		ocassionDetails: ocassionDetails
	};
};

export const updateOccasionFail = error => {
	return {
		type: actionTypes.UPDATE_OCCASION_FAIL,
		error: error
	};
};
