import React, { Component } from 'react';
import classes from './Calendar.css';
import Month from '../../components/Calendar/Month/Month';

class Calendar extends Component {

    state = {
        selectedDate: new Date()
    }

    getWeeksInMonth(month, year) {
        var weeks = [],
            firstDate = new Date(year, month, 1),
            lastDate = new Date(year, month + 1, 0),
            numDays = lastDate.getDate();

        var start = 1;
        var end = 7 - firstDate.getDay();
        while (start <= numDays) {
            weeks.push({ start: start, end: end });
            start = end + 1;
            end = end + 7;
            if (end > numDays)
                end = numDays;
        }
        return weeks;
    }

    getNormalizedWeekArray(startDay, endDay) {
        const week = [];
        console.log('start: ', startDay, ' end: ', endDay);
        for (let i = 0; i < 7; i++) {

            /* 
                1,4   ->  3,6       end < 7, 7 - (end - start + 1) = 3
                5,11  ->  0,6       start + i
                12,18 ->  0,6       
                19,25 ->  0,6       
                26,31 ->  0,5                   
            */

            let dayName = '';

            if( endDay < 7 ) {
                if(i >= 7 - (endDay - startDay + 1)) {
                    dayName = startDay + i - (7 - (endDay - startDay + 1));
                }
            }
            else if (startDay + i <= endDay) {
                dayName = startDay + i;
            }
            
            week.push(dayName);
            
        }

        return week;
    }

    onDaySelected = (day) => {
        console.log('day selected', day);

        this.setState({ selectedDate: new Date(
            this.state.selectedDate.getFullYear(), 
            this.state.selectedDate.getMonth(), 
            day) })

    }

    render() {

        const weeks = this.getWeeksInMonth(this.state.selectedDate.getMonth(), 
                this.state.selectedDate.getFullYear())
            .map(w => this.getNormalizedWeekArray(w.start, w.end));

        return (
            <div>
                <div className={classes.Calendar}>                
                    <Month weeks={weeks} date={this.state.selectedDate} onDaySelected={this.onDaySelected}/>
                </div>
            
                <p>Selected date: {this.state.selectedDate.toDateString()}</p>

            </div>
            
        );
    }
}

export default Calendar;