import * as actionTypes from "./actionTypes";
import axios from "../../axios-calendar";

const fetchEventsSuccess = events => {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    events: events
  };
};

const fetchEventsFail = error => {
  return {
    type: actionTypes.FETCH_EVENTS_FAIL,
    error: error
  };
};

const fetchEventsStart = () => {
  return {
    type: actionTypes.FETCH_EVENTS_START
  };
};

const incrementMonth = (date, step, language) => {
  var newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + step);
  return selectDate(newDate, language);
};

const fetchAllEvents = (language) => {
  //return axios.get("/sample-en.json").then(res => {
  return axios.get(`/events/${language}.json`).then(res => {
    const fetchedEvents = [];
    for (let key in res.data) {
      fetchedEvents.push({
        ...res.data[key],
        id: key
      });
    }
    return fetchedEvents;
  });
};

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

const fetchEvents = (date,language) => {
  return dispatch => {
    dispatch(fetchEventsStart());
    dispatch({
      type: actionTypes.SELECT_DATE,
      selectedDate: date,
      selectedLanguage: language
    });

    fetchAllEvents(language)
      .then(fetchedEvents => filterByDate(fetchedEvents, date))
      .then(filteredEvents => dispatch(fetchEventsSuccess(filteredEvents)))
      .catch(err => {
        dispatch(fetchEventsFail(err));
      });
  };
};

export const selectDate = (date,language) => dispatch => dispatch(fetchEvents(date, language));

export const selectLanguage = language => {
  return {
    type: actionTypes.SELECT_LANGUAGE,
    language: language
  };
};

export const prevMonth = (date, language) => incrementMonth(date, -1, language);
export const nextMonth = (date, language) => incrementMonth(date, 1, language);
