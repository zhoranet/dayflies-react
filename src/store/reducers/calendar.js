import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedDate: new Date(),
    events: []
};

const createSelectedDateState = (date) => {
    return {
        selectedDate: date
    };
}

const selectDate = (state, action) => {
    return updateObject( state, createSelectedDateState(action.selectedDate) );
};

const fetchEventsStart = (state, action) => {
    return updateObject( state, { loading: true } );
}

const fetchEventsSuccess = (state, action) => {
    return updateObject( state, { 
        events: action.events,
        loading: false 
    } );
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_DATE: return selectDate( state, action );        
        case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );        
        case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );        
        default: return state;
    }
};

export default reducer;