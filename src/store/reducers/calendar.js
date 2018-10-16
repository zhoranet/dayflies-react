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

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SELECT_DATE: return selectDate( state, action );
        default: return state;
    }
};

export default reducer;