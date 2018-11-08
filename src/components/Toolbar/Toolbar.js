import React from "react";
import classes from "./Toolbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const toolbar = props => {
	return (
		<div className={classes.Toolbar}>
			<div className={classes.NavigationListConatiner}>
				<Button btnType="ToggleSideDrawer" clicked={props.toggleDrawer}>
					<FontAwesomeIcon icon="bars" size="2x" />
				</Button>
			</div>
			<div className={classes.Title}>
				<h2><Link to="/">{props.title}</Link></h2>
			</div>
		</div>
	);
};

export default toolbar;
