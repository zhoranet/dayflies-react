import React, { Component } from 'react';
import classes from './EventList.css';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";

class EventList extends Component {

    componentDidMount () {
        var today = new Date();
        this.props.onSelectDay(today.getFullYear(), today.getMonth(), today.getDate());
    }

    formatDate = (x) => x.toISOString().split('T')[0];
    
    render() {
        const events = this.props.events
            .map((x, i) => <div key={'e' + i} ><h4>{x.name}</h4><p>{x.short} <Link to={`/event/${this.formatDate(this.props.date)}/${x.id}`} >more...</Link> </p></div>);

        return (

            <div className={classes.EventList}>
                <div className={classes.EventListHeader}>
                    <Button btnType="Calendar" clicked={() => this.props.onPrevDay(this.props.date)} ><FontAwesomeIcon icon="chevron-left" /></Button>
                    <div>
                        <h1>{this.props.date.toDateString()}</h1>
                    </div>
                    <Button btnType="Calendar" clicked={() => this.props.onNextDay(this.props.date)}><FontAwesomeIcon icon="chevron-right" /></Button>
                </div>
                {events}
            </div>
        );
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
        onSelectDay: (year, month, day) => dispatch(actions.selectDay(year, month, day)),
        onNextDay: (date) => dispatch(actions.nextDay(date)),
        onPrevDay: (date) => dispatch(actions.prevDay(date))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
