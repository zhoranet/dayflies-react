import React from "react";
import classes from "./Pager.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pager = props => {
	return (
		<div className={classes.Pager}>
			<Button btnType="NavCircle" clicked={props.prevPage}>
				<FontAwesomeIcon icon="angle-double-left" />
			</Button>
			
			<Button btnType="NavCircle" clicked={props.nextPage}>
				<FontAwesomeIcon icon="angle-double-right" />
			</Button>
		</div>
	);
};

export default pager;
