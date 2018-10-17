import React, { Component } from 'react';
import classes from './EventList.css';
import { connect } from 'react-redux';
import data from '../../data/sample-en.json';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";

class EventList extends Component {

    
    render() {
        const events = data.slice(0, 6)
            .map((x, i) => <div key={'e' + i} ><h1>{x.name}</h1><p>{x.full}</p></div>);

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
    };
}

const mapDispatchToProps = dispatch => {
    return {        
        onNextDay: (date) => dispatch(actions.nextDay(date)),
        onPrevDay: (date) => dispatch(actions.prevDay(date))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
