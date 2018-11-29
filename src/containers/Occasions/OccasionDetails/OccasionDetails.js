import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";
import classes from "./OccasionDetails.module.scss";
import Button from "../../../components/Button/Button";
import Form from "../../../components/Form/Form";

export class OccasionDetails extends Component {
	inputElements = {
		name: { elementType: "input", label: "Name", value: "The big event" },
		date: { elementType: "input", label: "Date", value: "2018-01-01" },
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
		desc: { elementType: "input", label: "Description", value: "" }
	};

	submitHandler = formData => {
		console.log("Submit", formData);
		this.props.onUpdateOccasion(this.props.token, formData);
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

const mapStateToProps = state => {
	return {
		occasionDetails: state.occasions.occasionDetails,
		token: state.auth.token
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onUpdateOccasion: (token, occasionDetails) => dispatch(actions.updateOccasion(token, occasionDetails))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OccasionDetails);
