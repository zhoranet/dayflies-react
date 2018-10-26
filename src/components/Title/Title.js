import React from 'react'
import classes from './Title.module.scss'

const title = (props) => {
    return (
        <div className={classes.Title}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default title;