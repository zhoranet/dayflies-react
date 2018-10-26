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

const incrementDay = (date, step) => {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() + step);
  return selectDate(newDate);
};

const incrementMonth = (date, step) => {
  var newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + step);
  return selectDate(newDate);
};

const fetchAllEvents = () => {
  return axios.get("/sample-en.json").then(res => {
  //return axios.get("/events/en.json").then(res => {
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
    
    if(index > 15) index = index - 15;    
    const randomSequence = '245913152879152614361725113313795819';
    let pair = randomSequence.substring(index * 2, (index * 2) + 2);
    return events.filter(x => parseInt(x.id, 10) >= parseInt(pair.charAt(0), 10) 
        && parseInt(x.id, 10) <= parseInt(pair.charAt(1), 10));
}

const fetchEvents = date => {
  return dispatch => {
    dispatch(fetchEventsStart());
    dispatch({
      type: actionTypes.SELECT_DATE,
      selectedDate: date
    });

    fetchAllEvents()
      .then(fetchedEvents => filterByDate(fetchedEvents, date))
      .then(filteredEvents => dispatch(fetchEventsSuccess(filteredEvents)))
      .catch(err => {
        dispatch(fetchEventsFail(err));
      });
  };
};

const selectDate = date => dispatch => dispatch(fetchEvents(date));

export const selectDay = (year, month, day) => dispatch =>
  dispatch(selectDate(new Date(year, month, day)));
export const prevDay = date => incrementDay(date, -1);
export const nextDay = date => incrementDay(date, 1);
export const prevMonth = date => incrementMonth(date, -1);
export const nextMonth = date => incrementMonth(date, 1);
