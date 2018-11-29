import React, { Component } from "react";
import classes from "./SideDrawer.module.scss";
import Calendar from "../../containers/Calendar/Calendar";
import Backdrop from "../Backdrop/Backdrop";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as dateUtils from "../../shared/dateUtils";

class SideDrawer extends Component {
	getDayUrl = (language, date) => `/${language}/${dateUtils.formatDate(date)}`;

	changeLanguage = event => {
		this.props.onClose();
		this.props.history.push(this.getDayUrl(event.target.value, this.props.date));
	};

	render() {
		const sideDrawerClass = classes.SideDrawer + " " + (this.props.open ? classes.Open : classes.Close);

		return (
			<React.Fragment>
				<Backdrop show={this.props.open} clicked={this.props.onClose} />
				<div className={sideDrawerClass}>
					<Calendar closeCalendar={this.props.onClose} />
					<div className={classes.Language}>
						<LanguageSelector label="Language" changed={this.changeLanguage} />
					</div>
					<ul className={classes.NavigationItems} onClick={this.props.onClose}>
						<li className={classes.NavigationItem}>
							<Link to="/">Home</Link>
						</li>
						<li className={classes.NavigationItem}>
							<Link to="/about">About</Link>
						</li>
						<li className={classes.NavigationItem}>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		language: state.events.selectedLanguage,
		date: state.events.selectedDate
	};
};

export default connect(
	mapStateToProps,
	null
)(withRouter(SideDrawer));
