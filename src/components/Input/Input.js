import React from "react";

import classes from "./Input.module.scss";

const input = props => {
	let inputElement = null;
	let labelElement = null;

	inputElement = (
		<input
			className={classes.Input}
			{...props.elementConfig}
			value={props.value}
			onChange={props.changed}
		/>
	);

	if (props.label) {
		labelElement = <label className={classes.Label}>{props.label}</label>;
	}

	return (
		<div className={classes.Input}>
			{labelElement}
			{inputElement}
		</div>
	);
};

export default input;
