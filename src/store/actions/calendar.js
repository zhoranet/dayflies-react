import * as actionTypes from './actionTypes';

export const selectDate = date => {
    return {
        type: actionTypes.SELECT_DATE,
        selectedDate: date
    }
};

export const nextDay = () => {
    return {
        type: actionTypes.NEXT_DAY        
    }
};

export const prevDay = day => {
    return {
        type: actionTypes.PREV_DAY
    }
};