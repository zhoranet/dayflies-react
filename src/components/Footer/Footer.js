import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";

const footer = props => {
	return (
		<div className={classes.Footer}>
			<ul className={classes.NavigationItems}>
				<li className={classes.NavigationItem}>
					<Link to="/login">ADMIN</Link>
				</li>
				<li className={classes.NavigationItem}>
					<Link to="/about">ABOUT</Link>
				</li>
			</ul>

			<div className={classes.Copyright}>Dayflies 2018 Copyright</div>
		</div>
	);
};

export default footer;
