import React from "react";
import classes from "./EventListRow.module.scss";
import { Link } from "react-router-dom";

const eventListRow = props => {
	return (
		<div className={classes.EventListRow}>
			<div className={classes.ColumnId}>{props.rowId}</div>
			<div className={classes.ColumnName}>
				<div className={classes.FixedHeightContent}>
					<Link className={classes.More} to={`/edit/${props.rowId}`} >
						{props.name}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default eventListRow;
