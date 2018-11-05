import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedDate: new Date(),
    events: [],
    selectedLanguage: 'en'
};

const createSelectedDateState = (date, language) => {
    return {
		selectedDate: date,
		selectedLanguage: language
    };
}

const selectDate = (state, action) => {
    return updateObject( state, createSelectedDateState(action.selectedDate, action.selectedLanguage) );
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

const selectLanguage = (state, action) => {
    return updateObject( state, {selectedLanguage: action.language} );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_DATE: return selectDate( state, action );        
        case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );        
        case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );        
        case actionTypes.SELECT_LANGUAGE: return selectLanguage( state, action );        
        default: return state;
    }
};

export default reducer;