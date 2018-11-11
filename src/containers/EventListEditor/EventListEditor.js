import React, { Component } from "react";
import classes from "./EventListEditor.module.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";
import Pager from "../../components/Pager/Pager";
import EventListRow from '../../components/Editor/EventListRow/EventListRow';

export class EventListEditor extends Component {
	componentDidMount() {
		this.props.onFetchEventsPage(0, 5);
	}

	// textEllipsis(str, maxLength, { side = "end", ellipsis = "&hellip;" } = {}) {
	// 	if (str.length > maxLength) {
	// 		switch (side) {
	// 			case "start":
	// 				return ellipsis + str.slice(-(maxLength - ellipsis.length));
	// 			case "end":
	// 			default:
	// 				return str.slice(0, maxLength - ellipsis.length) + ellipsis;
	// 		}
	// 	}
	// 	return str;
	// }

	render() {
		const events = this.props.events.map(x => <EventListRow rowId={x.id} name={x.name}/>);
		const index = this.props.pageIndex;
		const pageSize = 5;

		return (
			<div className={classes.Editor}>
				<header>
					<h2>Editor</h2>
				</header>
				<div className={classes.Content}>
					{events}
				</div>

				<Pager
					prevPage={() => this.props.onFetchEventsPage(index, -pageSize)}
					nextPage={() => this.props.onFetchEventsPage(index, pageSize)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		events: state.events.page,
		pageIndex: state.events.pageIndex
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchEventsPage: (pageIndex, pageSize) => dispatch(actions.fetchEventsPage(pageIndex, pageSize))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(EventListEditor));
