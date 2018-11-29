import React, { Component } from "react";
import classes from "./OccasionList.module.scss";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import { withRouter } from "react-router-dom";
import Pager from "../../../components/Pager/Pager";
import OccasionRow from "../../../components/OccasionRow/OccasionRow";

export class OccasionList extends Component {
	sizes = {
		small: "small",
		medium: "medium",
		large: "large"
	};

	state = {
		pageSize: 5
	};

	getComponentSize = () => {
		const w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName("body")[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
		//height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

		let componentSize = this.sizes.small;

		if (width > 400 && width <= 768) {
			componentSize = this.sizes.medium;
		}
		if (width > 768) {
			componentSize = this.sizes.large;
		}

		return componentSize;
	};

	resize = () => {
		const currentSize = this.getCurrentPageSize();
		if (this.state.pageSize !== currentSize) {
			this.props.onFetchEventsPage(0, currentSize);
			this.setState({ pageSize: currentSize });
			this.forceUpdate();
		}
	};

	getCurrentPageSize = () => {
		return this.getPageSizeFromComponentSize(this.getComponentSize());
	};

	getPageSizeFromComponentSize = componentSize => {
		return componentSize === this.sizes.small ? 5 : 10;
	};

	componentDidMount() {
		const currentSize = this.getCurrentPageSize();
		this.setState({ pageSize: currentSize });
		this.props.onFetchEventsPage(0, currentSize);
		window.addEventListener("resize", debounce(this.resize, 100));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", debounce(this.resize, 100));
	}

	render() {
		const events = this.props.events.map(x => <OccasionRow key={x.id} rowId={x.id} name={x.name} />);
		const index = this.props.pageIndex;

		return (
			<div className={classes.Editor}>
				<header>
					<h2>Edit events</h2>
				</header>
				<div className={classes.Content}>{events}</div>

				<Pager
					prevPage={() => this.props.onFetchEventsPage(index, -this.state.pageSize)}
					nextPage={() => this.props.onFetchEventsPage(index, this.state.pageSize)}
				/>
			</div>
		);
	}
}

const debounce = (func, delay) => {
	let inDebounce;
	return function() {
		const context = this;
		const args = arguments;
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => func.apply(context, args), delay);
	};
};

const mapStateToProps = state => {
	return {
		events: state.occasions.page,
		pageIndex: state.occasions.pageIndex		
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchEventsPage: (pageIndex, pageSize) => dispatch(actions.fetchOccasionsPage(pageIndex, pageSize))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(OccasionList));
