import React, { Component } from "react";
import * as dateUtils from "../../shared/dateUtils";
import moment from "moment";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const withEventLoader = WrappedComponent => {
	class EventLoader extends Component {
		componentDidMount() {
			this.selectDate(this.getUrlLanguage(), this.getUrlDate());
		}

		componentDidUpdate(prevProps) {
			if (this.props.location !== prevProps.location) {
				this.selectDate(this.getUrlLanguage(), this.getUrlDate());
			}
		}

		getUrlDate() {
			if (this.props.match && this.props.match.params.date) {
				return moment(this.props.match.params.date, "YYYY-MM-DD").toDate();
			} else {
				return new Date();
			}
		}

		getUrlLanguage = () => this.props.match.params.language || "en";

		selectDate(language, date) {
			if (
				!this.props.events ||
				!this.props.events.length ||
				this.props.date.toISOString() !== date.toISOString() ||
				this.props.language !== language
			) {
				this.props.onSelectDate(this.getUrlDate(), this.getUrlLanguage());
			}
		}

		getDayUrl = (language, date) => `/${language}/${dateUtils.formatDate(date)}`;

		render() {
			const date = this.getUrlDate();
			const language = this.getUrlLanguage();
			const dayUrl = this.getDayUrl(language, date);
			return (
				<WrappedComponent
					{...this.props}
					date={date}
					language={language}
					dayUrl={dayUrl}
					getDayUrl={this.getDayUrl}
				/>
			);
		}
	}

	const mapStateToProps = state => {
		return {
			date: state.selectedDate,
			language: state.selectedLanguage,
			events: state.events
		};
	};

	const mapDispatchToProps = dispatch => {
		return {
			onSelectDate: (date, language) => dispatch(actions.fetchEvents(date, language))
		};
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(EventLoader);
};

export default withEventLoader;
