import React, { Component } from 'react';
import classes from './EventList.module.scss';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../store/actions';
import Swipeable from 'react-swipeable';
import * as dateUtils from '../../shared/dateUtils';

class EventList extends Component {
	
	componentDidMount() {

		this.unlisten = this.props.history.listen((location, action) => {
			this.selectDate(this.getUrlDate(), this.getUrlLanguage());
		});

		if (!this.props.events || !this.props.events.length) {
			this.selectDate(this.getUrlDate(), this.getUrlLanguage());
		}		
	}

	componentWillUnmount() {
		this.unlisten();
	}

	getUrlDate() {
		return this.props.match && this.props.match.params.date ? new Date(this.props.match.params.date) : new Date();
	}

	getUrlLanguage() {
		return this.props.match.params.language || 'en';
	}

	selectDate(date, language) {
		this.props.onSelectDay(date.getFullYear(), date.getMonth(), date.getDate(), language);
	}

	incrementDay(date, step) {
		var newDate = new Date(date);
		newDate.setDate(newDate.getDate() + step);
		return newDate;
	}

	getDayUrl(language, date, ) {
		return `${language}/${dateUtils.formatDate(date)}`;
	}

	getPrevDayUrl(language, date) {
		return this.getDayUrl(language, this.incrementDay(date, -1));
	}

	getNextDayUrl(language, date) {
		return this.getDayUrl(language, this.incrementDay(date, -1));
	}

	render() {
		const date = this.getUrlDate();
		const language = this.getUrlLanguage();
		const dayUrl =  this.getDayUrl(language, date);

		const events = this.props.events.map((x, i) => (
			<div key={'e' + i}>
				<Link className={classes.More} to={`/event/${dayUrl}/${x.id}`}>
					<h4 className={classes.EventListItemTitle}>{x.name}</h4>
					<p>{x.short} ...</p>
				</Link>
			</div>
		));

		return (
			<div className={classes.EventList}>
				<Swipeable
					flickThreshold={0.8}
					delta={50}
					onSwipedLeft={() => this.props.onNextDay(date, language)}
					onSwipedRight={() => this.props.onPrevDay(date, language)}>
					<div className={classes.EventListHeader}>
						<Link to={"/" + this.getPrevDayUrl(language, date)} >
							<Button btnType="NavCircle" >
								<FontAwesomeIcon icon="angle-double-left" />
							</Button>
						</Link>

						<div className={classes.EvnetListHeaderName}>
							<h3>{date.toDateString()}</h3>
						</div>

						<Link to={"/" + this.getNextDayUrl(language, date)} >
							<Button btnType="NavCircle" >
								<FontAwesomeIcon icon="angle-double-right" />
							</Button>
						</Link>
						
					</div>
					{events}
				</Swipeable>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		date: state.selectedDate,
		events: state.events,
		language: state.selectedLanguage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSelectDay: (year, month, day, language) => dispatch(actions.selectDay(year, month, day, language)),
		onNextDay: (date, language) => dispatch(actions.nextDay(date, language)),
		onPrevDay: (date, language) => dispatch(actions.prevDay(date, language)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList);
