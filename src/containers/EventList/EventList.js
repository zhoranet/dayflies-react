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
                    <Button btnType="Calendar" clicked={this.props.onPrevDay} ><FontAwesomeIcon icon="chevron-left" /></Button>
                    <div>
                        <h1>{this.props.date.toDateString()}</h1>
                    </div>
                    <Button btnType="Calendar" clicked={this.props.onNextDay}><FontAwesomeIcon icon="chevron-right" /></Button>
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
        onSelectDay: (day) => dispatch(actions.selectDate(day)),
        onNextDay: () => dispatch(actions.nextDay()),
        onPrevDay: () => dispatch(actions.prevDay())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
