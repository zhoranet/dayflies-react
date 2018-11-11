import React from "react";
import classes from "./ResponsiveTable.module.scss";

const responsiveTable = props => {
	return (
		<div className={`${classes.Rtable} ${classes.RtableCollapse}`}>
			<div className={`${classes.RtableCell} ${classes.IdCell}`}>
				<h3>Eddard Stark</h3>
			</div>
			<div className={`${classes.RtableCell} ${classes.NameCell}`}>
				Featuring three generations of Indigenous women performers. A full meal and concert deal!
			</div>

			<div className={`${classes.RtableCell} ${classes.IdCell}`}>
				<h3>Jon Snow</h3>
			</div>
			<div className={`${classes.RtableCell} ${classes.NameCell}`}>Has a sword named Longclaw</div>
		</div>

		// <div className={`${classes.Rtable} ${classes.Rtable4cols} ${classes.RtableCollapse}`}>
		// 	<div className={`${classes.RtableCell} ${classes.RtableCellHead}`}>
		// 		<h3>Eddard Stark</h3>
		// 	</div>
		// 	<div className={classes.RtableCell}>
		// 		Featuring three generations of Indigenous women performers. A full meal and concert deal!
		// 	</div>
		// 	<div className={classes.RtableCell}>No direwolf</div>
		// 	<div className={`${classes.RtableCell} ${classes.RtableCellFoot}`}>
		// 		<strong>Lord of Winterfell</strong>
		// 	</div>

		// 	<div className={`${classes.RtableCell} ${classes.RtableCellHead}`}>
		// 		<h3>Jon Snow</h3>
		// 	</div>
		// 	<div className={classes.RtableCell}>Has a sword named Longclaw</div>
		// 	<div className={classes.RtableCell}>Direwolf: Ghost</div>
		// 	<div className={`${classes.RtableCell} ${classes.RtableCellFoot}`}>
		// 		<strong>Knows nothing</strong>
		// 	</div>
		// </div>
	);
};

export default responsiveTable;
