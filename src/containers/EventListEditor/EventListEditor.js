import React, { Component } from "react";
import classes from "./EventListEditor.module.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

export class EventListEditor extends Component {
	componentDidMount() {
		this.props.onFetchEventsPage(0);
	}

	render() {
		return (
			<header>
				<h1>Event List Editor</h1>
			</header>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events.page
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchEventsPage: pageIndex => dispatch(actions.fetchEventsPage(pageIndex))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(EventListEditor));
