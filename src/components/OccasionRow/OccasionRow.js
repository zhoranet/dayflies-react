import React from "react";
import classes from "./OccasionRow.module.scss";
import { Link } from "react-router-dom";

const occasionRow = props => {
	return (
		<div className={classes.EventListRow}>
			<div className={classes.ColumnId}>{props.date}</div>
			<div className={classes.ColumnName}>
				<div className={classes.FixedHeightContent} onClick={props.clicked}>
					<Link className={classes.More} to={props.linkTo}>
						{props.title}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default occasionRow;
