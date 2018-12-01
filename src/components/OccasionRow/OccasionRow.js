import React from "react";
import classes from "./OccasionRow.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";

const occasionRow = props => {
	return (
		<div className={classes.EventListRow}>
			<div className={classes.ColumnEdit}>
				<Button btnType="EditRow" clicked={props.clicked}>
					<FontAwesomeIcon icon="pen" size="sm" />
				</Button>
			</div>
			<div className={classes.ColumnId}>{props.date}</div>
			<div className={classes.ColumnName}>
				<div className={classes.FixedHeightContent}>
					{props.title}
				</div>
			</div>
		</div>
	);
};

export default occasionRow;
