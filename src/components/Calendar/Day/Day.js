import React from 'react';
import classes from './Day.module.scss';

const day = (props) => {

    let dayClass = [classes.Day];

    if(props.selected) {
        dayClass.push(classes.selected);
    }

    return (
        <div className={dayClass.join(' ')} 
            onClick={() => props.click(props.day)}>
            {props.day}
        </div>
    );
}

export default day;