import React, { Component } from "react";
import classes from "./EventEdit.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

export class EventEdit extends Component {

	inputElements = [
		{ elemtType: 'input', label: 'Date' },
		{ elemtType: 'input', label: 'Name' },
		{ elemtType: 'input', label: 'Description' },
	];

	render() {

		var elements = this.inputElements.map(x => <Input {...x} ></Input>);

		return (			
			<div className={classes.EventEdit}>
				<h2>Edit</h2>
				{elements}
				<Button>OK</Button>
			</div>	
		);
	}
}

export default EventEdit;
