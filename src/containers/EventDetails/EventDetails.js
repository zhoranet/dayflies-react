import React, { Component } from 'react';
import classes from './EventDetails.css';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";

class EventDetails extends Component {

    componentWillMount() {
        if(!this.props.events || !this.props.events.length) {
            let date = new Date();
            this.props.onSelectDay(date.getFullYear(), date.getMonth(), date.getDate());
        }        
    }

    render() {

        const eventDetails = this.props.events.filter(x=> x.id = this.props.match.params.id)[0];

        let details = null;

        if(eventDetails) {
            details =  <React.Fragment>

                <div className={classes.EventDetailsHeader}>
                    <Button btnType="Calendar"><FontAwesomeIcon icon="chevron-left" /></Button>
                    <div>
                        <h3>{eventDetails.name}</h3>
                    </div>
                    <Button btnType="Calendar"><FontAwesomeIcon icon="chevron-right" /></Button>
                </div>                
                <p>{eventDetails.full}</p>
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

