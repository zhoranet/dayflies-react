import React, { Component } from "react";
import classes from "./EventEdit.module.scss";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

export class EventEdit extends Component {

	inputElements = {
		date: { elemtType: "input", label: "Date", value: '2018-01-01' },
		name: { elemtType: "input", label: "Name", value: 'The big event' },
		desc: { elemtType: "input", label: "Description", value: '' }
	};

	
	submitHandler = formData => {		
		console.log("Submit", formData);
	};	

	render() {

		return(
			<div className={classes.EventEdit}>
				<Form inputElements={this.inputElements} submit={this.submitHandler}>
					<Button btnType='NavBorderText'>SAVE</Button>	
				</Form>
			</div>
			
		);		
	}

	
}

export default EventEdit;
