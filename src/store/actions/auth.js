import * as actionTypes from "./actionTypes";

export const auth = (email, password) => {
	return {
		type: actionTypes.AUTH_USER,
		email: email,
		password: password
	};
};

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const logoutSucceed = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = expirationTime => {
	return {
		type: actionTypes.AUTH_CHECK_TIMEOUT,
		expirationTime: expirationTime
	};
};
