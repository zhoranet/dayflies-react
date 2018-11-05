import React, { Component } from "react";
import classes from "./EventList.module.scss";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as actions from "../../store/actions";
import Swipeable from "react-swipeable";
import * as dateUtils from "../../shared/dateUtils";
import moment from "moment";

class EventList extends Component {
	componentDidMount() {
		this.unlisten = this.props.history.listen((location, action) => {
			this.props.onSelectDate(this.getUrlDate(), this.getUrlLanguage());
		});

		if (!this.props.events || !this.props.events.length) {
			this.props.onSelectDate(this.getUrlDate(), this.getUrlLanguage());
		}
	}

	componentWillUnmount() {
		this.unlisten();
	}

	getUrlDate() {
		if (this.props.match && this.props.match.params.date) {
			return moment(this.props.match.params.date, "YYYY-MM-DD").toDate();
		} else {
			return new Date();
		}
	}

	getUrlLanguage() {
		return this.props.match.params.language || "en";
	}

	incrementDay(date, step) {
		var newDate = new Date(date);
		newDate.setDate(newDate.getDate() + step);
		return newDate;
	}

	getDayUrl(language, date) {
		return `${language}/${dateUtils.formatDate(date)}`;
	}

	getPrevDayUrl(language, date) {
		return "/" + this.getDayUrl(language, this.incrementDay(date, -1));
	}

	getNextDayUrl(language, date) {
		return "/" + this.getDayUrl(language, this.incrementDay(date, 1));
	}

	swipe = toUrl => this.props.history.replace(toUrl);

	render() {
		const date = this.getUrlDate();
		console.log("render", date);
		const language = this.getUrlLanguage();
		const dayUrl = this.getDayUrl(language, date);

		const events = this.props.events.map((x, i) => (
			<div key={"e" + i}>
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
					onSwipedLeft={() => this.swipe(this.getNextDayUrl(language, date))}
					onSwipedRight={() => this.swipe(this.getPrevDayUrl(language, date))}
				>
					<div className={classes.EventListHeader}>
						<Link to={this.getPrevDayUrl(language, date)}>
							<Button btnType="NavCircle">
								<FontAwesomeIcon icon="angle-double-left" />
							</Button>
						</Link>

						<div className={classes.EvnetListHeaderName}>
							<h3>{date.toDateString()}</h3>
						</div>

						<Link to={this.getNextDayUrl(language, date)}>
							<Button btnType="NavCircle">
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
		events: state.events
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSelectDate: (date, language) => dispatch(actions.selectDate(date, language))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventList);
