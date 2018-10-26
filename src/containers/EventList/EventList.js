import React, { Component } from 'react';
import classes from './EventList.module.scss';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";

class EventList extends Component {

    componentDidMount () {        

        if(!this.props.events || !this.props.events.length) {
            this.selectDay();
        }        
    }

    selectDay = () => {
        var today = (this.props.match && this.props.match.params.date) 
            ? new Date(this.props.match.params.date)
            : new Date(); 
                    
        this.props.onSelectDay(today.getFullYear(), today.getMonth(), today.getDate());
    }

    formatDate = (x) => x.toISOString().split('T')[0];
    
    render() {
        const events = this.props.events
            .map((x, i) =>                 
                <div key={'e' + i} >
                    <Link className={classes.More} 
                            to={`/event/${this.formatDate(this.props.date)}/${x.id}`} >
                        <h4 className={classes.EventListItemTitle}>{x.name}</h4>
                    
                    <p>
                        {x.short} ...
                    </p>
                    </Link>                     
                </div>);

        return (

            <div className={classes.EventList}>
                <div className={classes.EventListHeader}>
                    <Button btnType="NavCircle" clicked={() => this.props.onPrevDay(this.props.date)} ><FontAwesomeIcon icon="angle-double-left" /></Button>
                    <h2>{this.props.date.toDateString()}</h2>                    
                    <Button btnType="NavCircle" clicked={() => this.props.onNextDay(this.props.date)}><FontAwesomeIcon icon="angle-double-right" /></Button>
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
