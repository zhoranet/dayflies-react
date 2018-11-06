import * as actionTypes from "./actionTypes";

export const fetchEvents = (date, language) => {
  return {
    type: actionTypes.FETCH_EVENTS,
    date: date,
	language: language
  };
};

export const fetchEventsSuccess = (date, language, events) => {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
	events: events,
	date: date,
	language: language
  };
};

export const fetchEventsFail = error => {
  return {
    type: actionTypes.FETCH_EVENTS_FAIL,
    error: error
  };
};

export const fetchEventsStart = () => {
  return {
    type: actionTypes.FETCH_EVENTS_START
  };
};

export const selectLanguage = language => {
	return {
		type: actionTypes.SELECT_LANGUAGE,
		language: language
	};
};

