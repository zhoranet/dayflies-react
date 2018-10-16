import * as actionTypes from './actionTypes';

export const selectDate = date => {
    return {
        type: actionTypes.SELECT_DATE,
        selectedDate: date
    }
};