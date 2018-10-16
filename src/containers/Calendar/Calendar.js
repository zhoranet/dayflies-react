import React, { Component } from 'react';
import classes from './Calendar.css';
import Month from '../../components/Calendar/Month/Month';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";


class Calendar extends Component {

    componentWillMount () {        
        //this.props.onSelectDate(new Date());
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

    

    render() {

        let calendar = null;

        if(this.props.date) {
        
            const weeks = this.getWeeksInMonth(this.props.date.getMonth(), 
                this.props.date.getFullYear())
            .map(w => this.getNormalizedWeekArray(w.start, w.end));

            calendar = <div className={classes.Calendar}>                
                    <Month weeks={weeks} date={this.props.date} onDaySelected={this.props.onSelectDay}/>
                </div>;
        }

        
        return (
            <div>
                {calendar}
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        date: state.selectedDate,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectDay: (day) => dispatch(actions.selectDate(new Date(2018, 10, day)))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
