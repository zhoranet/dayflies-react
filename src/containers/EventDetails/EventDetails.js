import React, { Component } from 'react';
import classes from './EventDetails.css';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";
import { Link } from 'react-router-dom';

class EventDetails extends Component {

    componentWillMount() {
        if(!this.props.events || !this.props.events.length) {
            let date = new Date();
            this.props.onSelectDay(date.getFullYear(), date.getMonth(), date.getDate());
        }        
    }

    getEventDetailsById = (id) => this.props.events.filter(x=> x.id === id)[0];

    formatDate = (x) => x.toISOString().split('T')[0];

    findIndex = (array, id) => {
        for (let index = 0; index < array.length; index++) {
            if(array[index].id === id) {
                return index;
            }
        }
        return -1;
    }

    getEventDetailsId = (id, step) => {
        if(!this.props.events || !this.props.events.length) {
            return 0;
        }

        let index = this.findIndex(this.props.events, id);

        if(index < 0)  {
            return -1;
        }
        else {
            index += step;
        }            

        if(index >= this.props.events.length ) {
            index = 0;
        }
        else if (index < 0) {
            index = this.props.events.length - 1;
        }        
        return this.props.events[index].id;
    }

    createMarkup =(text) => { 
        var paragraps = text.split('\r\n');
        paragraps.map(p=> `<p>${p}</p>`)
        return {__html: text.replace(/\r\n/g, "<br />")}; 
    };

    render() {

        const eventDetails = this.getEventDetailsById(this.props.match.params.id);

        let details = null;

        if(eventDetails) {

            const nextId = this.getEventDetailsId(this.props.match.params.id, 1);
            const prevId = this.getEventDetailsId(this.props.match.params.id, -1);
            const dateParam = this.formatDate(this.props.date);

            const paragraphList = eventDetails.full.split('\r\n').map((x, i)=><p key={i}>{x}</p>);

            details =  <React.Fragment>

                <div className={classes.EventListHeader}>
                    <Link to={`/${dateParam}`} >
                        <Button btnType="Calendar"><FontAwesomeIcon icon="angle-double-left" />{' ' + this.props.date.toDateString()}</Button>
                    </Link>
                </div>

                <div className={classes.EventDetailsHeader}>
                    <Link to={`/event/${dateParam}/${nextId}`} replace  >
                        <Button btnType="Calendar"><FontAwesomeIcon icon="chevron-left" /></Button>
                    </Link>
                    
                    <h3>{eventDetails.name}</h3>
                    
                    <Link to={`/event/${dateParam}/${prevId}`} replace>
                        <Button btnType="Calendar"><FontAwesomeIcon icon="chevron-right" /></Button>
                    </Link>
                    
                </div>                
                {paragraphList}
            </React.Fragment>
                        
        }

        return <div className={classes.EventDetails}>{details}</div>;        
    }
}

const mapStateToProps = state => {
    return {
        date: state.selectedDate,
        events: state.events
    };
}

const mapDispatchToProps = dispatch => {
    return {        
        onSelectDay: (year, month, day) => dispatch(actions.selectDay(year, month, day))        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);

