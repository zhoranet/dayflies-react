import React from 'react';
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    
    const sideDrawerClass = classes.SideDrawer + ' ' + (props.open ? classes.Open : classes.Close);

    return (
        <div className={sideDrawerClass} onClick={props.onClose}>Side drawer</div>
    );

}

export default sideDrawer;