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
    return updateObject( state, 
        createSelectedDateState(action.selectedDate) );
};

const selectDay = (state, action) => {
    return updateObject( state, 
        createSelectedDateState(new Date(state.selectedDate.getFullYear(), 
            state.selectedDate.getMonth(), action.selectedDay)));
};


const incrementDate = (state, step) => {
    var newDate = new Date(state.selectedDate);
    newDate.setDate(newDate.getDate() + step);
    return updateObject( state, {selectedDate: newDate} );
};

const incrementMonth = (state, step) => {
    var newDate = new Date(state.selectedDate);
    newDate.setMonth(newDate.getMonth() + step);
    return updateObject( state, createSelectedDateState(newDate) );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_DATE: return selectDate( state, action );
        case actionTypes.NEXT_DAY: return incrementDate( state, 1 );
        case actionTypes.PREV_DAY: return incrementDate( state, -1 );
        case actionTypes.SELECT_DAY: return selectDay( state, action );
        case actionTypes.PREV_MONTH: return incrementMonth( state, -1 );
        case actionTypes.NEXT_MONTH: return incrementMonth( state, 1 );
        default: return state;
    }
};

export default reducer;