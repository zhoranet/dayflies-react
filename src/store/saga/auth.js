import { put } from "redux-saga/effects";
import * as actions from "../actions";
import axios from "axios";

export function* authUserSaga(action) {
	yield put(actions.authStart());

	const authdata = {
		email: action.email,
		password: action.password,
		returnSecureToken: true
	};

	const apiKey = process.env.REACT_APP_API_KEY;

	const url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + apiKey;

	try {
		const response = yield axios.post(url, authdata);
		const expirationTime = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
		yield localStorage.setItem("token", response.data.idToken);
		yield localStorage.setItem("expirationDate", expirationTime);
		yield localStorage.setItem("userId", response.data.localId);
		yield put(actions.authSuccess(response.data.idToken, response.data.localId));
		yield put(actions.checkAuthTimeout(response.data.expiresIn));
	} catch (error) {
		yield put(actions.authFail(error.response.data.error));
	}
}
