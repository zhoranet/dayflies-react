import React from "react";
import classes from "./EventListRow.module.scss";

const eventListRow = props => {
	return (
		<div className={classes.EventListRow}>
			<div className={classes.ColumnId}>{props.rowId}</div>
			<div className={classes.ColumnName}>{props.name}</div>
		</div>
	);
};

export default eventListRow;
