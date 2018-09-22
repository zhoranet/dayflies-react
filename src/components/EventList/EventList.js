
import classes from './EventList.css'
import React from 'react'
import data from '../../data/sample-en.json'

const eventList = (props) => {
    
    const events = data.slice(0, 6)
        .map((x,i) => <div key={'e' + i} ><h1>{x.name}</h1><p>{x.full}</p></div> );
    
    return (

         <div className={classes.EventList}>
            {events}
        </div>
    );
}

export default eventList;