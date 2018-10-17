import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedDate: new Date()
};

const selectDate = (state, action) => {
    return updateObject( state, {
        selectedDate: action.selectedDate
    } );
};


const incrementDate = (state, step) => {

    var newDate = new Date(state.selectedDate);
    newDate.setDate(newDate.getDate() + step);
    return updateObject( state, {selectedDate: newDate} );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_DATE: return selectDate( state, action );
        case actionTypes.NEXT_DAY: return incrementDate( state, 1 );
        case actionTypes.PREV_DAY: return incrementDate( state, -1 );
        default: return state;
    }
};

export default reducer;