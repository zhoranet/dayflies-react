import React from 'react';
import classes from './SideDrawer.css';
import Calendar from '../../containers/Calendar/Calendar';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
    
    const sideDrawerClass = classes.SideDrawer + ' ' + (props.open ? classes.Open : classes.Close);

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.onClose}/>
            <div className={sideDrawerClass}>
                <Calendar closeCalendar={props.onClose}/>
            </div>
        </React.Fragment>
        
    );

}

export default sideDrawer;