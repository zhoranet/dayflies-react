import React, { Component } from "react";
import classes from "./EventEdit.module.scss";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

export class EventEdit extends Component {
	inputElements = {
		name: { elemtType: "input", label: "Name", value: "The big event" },
		date: { elemtType: "input", label: "Date", value: "2018-01-01" },
		repeat: {
			elementType: "select",
			label: "Repeat",
			value: "daily",
			elementConfig: {
				options: [
					{ value: "daily", displayValue: "Once a day" },
					{ value: "monthly", displayValue: "Once a month" }
				]
			}
		},
		desc: { elemtType: "input", label: "Description", value: "" }
	};

	submitHandler = formData => {
		console.log("Submit", formData);
	};

	render() {
		return (
			<div className={classes.EventEdit}>
				<Form inputElements={this.inputElements} submit={this.submitHandler}>
					<Button btnType="NavBorderText">SAVE</Button>
				</Form>
			</div>
		);
	}
}

export default EventEdit;
