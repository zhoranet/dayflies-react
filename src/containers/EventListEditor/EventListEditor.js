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

		const events = this.props.events.map(x => <li><h3>{x.name}</h3></li>)

		return (
			
			<div className={classes.Editor}>
				<header>
					<h2>Editor</h2>
				</header>
				<ul>
					{events}
				</ul>
			</div>
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
