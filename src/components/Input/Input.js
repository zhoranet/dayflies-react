import React from "react";

import classes from "./Input.module.scss";

const input = props => {

	let inputElement = null;
	let labelElement = null;

	switch (props.elementType) {
		case ('input'):
			inputElement = (
				<input
					className={classes.InputElement}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>);
			break;
		case ('textarea'):
			inputElement = <textarea
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
			break;
		case ('select'):
			inputElement = (
				<select
					value={props.value}
					onChange={props.changed}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			throw new Error("elementType is required");
	}

	
	

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
