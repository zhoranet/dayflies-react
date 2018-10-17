import * as actionTypes from './actionTypes';

export const selectDate = date => {
    return {
        type: actionTypes.SELECT_DATE,
        selectedDate: date
    }
};

export const selectDay = day => {
    return {
        type: actionTypes.SELECT_DAY,
        selectedDay: day
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

export const prevMonth = () => {
    return {
        type: actionTypes.PREV_MONTH
    }
};

export const nextMonth = () => {
    return {
        type: actionTypes.NEXT_MONTH
    }
};