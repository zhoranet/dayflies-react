import React, { Component } from "react";
import classes from "./EventEdit.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

export class EventEdit extends Component {
	state = {
		inputElements: {
			date: { elemtType: "input", label: "Date" },
			name: { elemtType: "input", label: "Name" },
			desc: { elemtType: "input", label: "Description" }
		}
	};

	onSubmitHandler = event => {
		event.preventDefault();

		// SUBMIT

		console.log("Submit");
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
	};

	render() {
		const formElementsArray = [];
		for (let key in this.inputElements) {
			formElementsArray.push({
				id: key,
				config: this.inputElements[key]
			});
		}

		var elements = formElementsArray.map(x => (
			<Input
				key={x.id}
				{...x.config}
				value={x.config.value}
				changed={event => this.inputChangedHandler(event, x.id)}
			/>
		));

		return (
			<form className={classes.EventEdit} onSubmit={this.onSubmitHandler}>
				<h2>Edit</h2>
				{elements}
				<Button>OK</Button>
			</form>
		);
	}
}

export default EventEdit;
