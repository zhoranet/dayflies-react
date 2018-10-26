import React from 'react';
import Week from '../Week/Week';
import classes from './Month.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button/Button';


const getMonthName = (date) => {    
    const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist[date.getMonth()];
}

const month = (props) => {

    const weeks = props.weeks.map((w, i) => {
        return <Week key={i} 
            days={w} 
            date={props.date} 
            onDaySelected={props.onDaySelected}/>
    });

    const monthName = getMonthName(props.date);

    return (
        <div className={classes.Month}>
            <div className={classes.MonthHeader}>                
                <Button btnType="Calendar" clicked={props.onPrevMonth}><FontAwesomeIcon icon="angle-double-left" /></Button>
                <div>{monthName} {props.date.getFullYear()}</div>
                <Button btnType="Calendar" clicked={props.onNextMonth}><FontAwesomeIcon icon="angle-double-right" /></Button>
            </div>
            <div className={classes.WeekHeader}>
                <div >Su</div>
                <div >Sa</div>
                <div >Mo</div>
                <div >Tu</div>
                <div >We</div>
                <div >Th</div>
                <div >Fr</div>
            </div>
            {weeks}
        </div>
    );
}

export default month;