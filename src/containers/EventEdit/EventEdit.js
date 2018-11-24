import React, { Component } from "react";
import classes from "./EventEdit.module.scss";
import Input from "../../components/Input/Input";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

export class EventEdit extends Component {

	

	render() {
		return (			
			<div className={classes.EventEdit}>
				<h2>Edit</h2>
				<Input elementType='input' label='Date:'/>
				<Input elementType='input' label='Name:'/>
				<Input elementType='input' label='Description:'/>
			</div>	
		);
	}
}

export default EventEdit;
