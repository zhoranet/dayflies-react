import * as actionTypes from './actionTypes';
import axios from '../../axios-calendar';

const fetchEventsSuccess = ( events ) => {
    return {
        type: actionTypes.FETCH_EVENTS_SUCCESS,
        events: events
    };
};

const fetchEventsFail = ( error ) => {
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
}

const incrementMonth = (date, step) => {
    var newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + step);
    return selectDate(newDate);
}

const fetchEvents = date => {
    return dispatch => {
        dispatch(fetchEventsStart());
        dispatch({
            type: actionTypes.SELECT_DATE,
            selectedDate: date
        });
        axios.get( '/events/en.json' )
                .then( res => {
                    const fetchedEvents = [];
                    for ( let key in res.data ) {
                        fetchedEvents.push( {
                            ...res.data[key],
                            id: key
                        } );
                    }
                    dispatch(fetchEventsSuccess(fetchedEvents));
                } )
                .catch( err => {
                    dispatch(fetchEventsFail(err));
                } );
    }
};

const selectDate =(date) => {

    fetchEvents(date);

    
}

export const selectDay = (year, month, day) => selectDate(new Date(year, month, day));
export const prevDay = date =>  incrementDay(date, -1);
export const nextDay = date => incrementDay(date, 1);
export const prevMonth = date => incrementMonth(date, -1);
export const nextMonth = date => incrementMonth(date, 1);

