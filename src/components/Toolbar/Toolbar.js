import React from 'react'
import classes from './Toolbar.css'


const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <button onClick={props.toggleDrawer}>Toggle Drawer</button>
        </div>
    );
}

export default toolbar;