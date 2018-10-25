import React from 'react';
import classes from './Week.module.scss';
import Day from '../Day/Day';

const week = (props) => {

    const days = props.days.map((day, i) => {        
        return <Day key={i} 
            day={day} 
            click={props.onDaySelected} 
            selected={day === props.date.getDate()}/>
    });

    return (
        <div className={classes.Week}>
            {days}
        </div>
    );
}

export default week;