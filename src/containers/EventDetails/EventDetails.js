import React, { Component } from 'react';
import classes from './EventDetails.module.scss';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from "../../store/actions";
import { Link } from 'react-router-dom';
import Swipeable from 'react-swipeable';

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

    getEventUrl(step) {
        const id = this.getEventDetailsId(this.props.match.params.id, step);
        const dateParam = this.formatDate(this.props.date);
        return (`/event/${dateParam}/${id}`);
    }

    swipe = (step) => this.props.history.push(this.getEventUrl(step));    

    render() {

        const eventDetails = this.getEventDetailsById(this.props.match.params.id);

        let details = null;

        if(eventDetails) {

            const dateParam = this.formatDate(this.props.date);
            const leftUrl = this.getEventUrl(-1);
            const rightUrl = this.getEventUrl(1);
            const paragraphList = eventDetails.full.split('\r\n').map((x, i)=><p key={i}>{x}</p>);



            details =  <React.Fragment>

                <div className={classes.EventListHeader}>
                    <Link to={`/${dateParam}`} >
                        <Button btnType="NavBorderText"><FontAwesomeIcon icon="angle-double-left" />{' ' + this.props.date.toDateString()}</Button>
                    </Link>
                </div>
                <Swipeable flickThreshold={0.8} delta={50}
                    onSwipedLeft={() => this.swipe(1)} onSwipedRight={() => this.swipe(-1)}>
                    <div className={classes.EventDetailsHeader}>
                        <Link to={leftUrl} replace  >
                            <Button btnType="NavCircle"><FontAwesomeIcon icon="chevron-left" /></Button>
                        </Link>
                        
                        <h4 className={classes.EvnetDeatilsHeaderName}>{eventDetails.name}</h4>
                        
                        <Link to={rightUrl} replace>
                            <Button btnType="NavCircle"><FontAwesomeIcon icon="chevron-right" /></Button>
                        </Link>
                        
                    </div>                
                    {paragraphList}
                </Swipeable>
                
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

