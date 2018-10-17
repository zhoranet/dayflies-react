import * as actionTypes from './actionTypes';

const selectDate = date => {
    return {
        type: actionTypes.SELECT_DATE,
        selectedDate: date
    }
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

export const selectDay = (year, month, day) => selectDate(new Date(year, month, day));
export const prevDay = date =>  incrementDay(date, -1);
export const nextDay = date => incrementDay(date, 1);
export const prevMonth = date => incrementMonth(date, -1);
export const nextMonth = date => incrementMonth(date, 1);

