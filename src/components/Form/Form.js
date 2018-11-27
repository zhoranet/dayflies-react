import React, { Component } from "react";
import classes from "./Form.module.scss";
import Input from "../../components/Input/Input";

export class Form extends Component {

	state = {
		inputElements: this.props.inputElements
	};

	convertObjectToElementsArray = (inputElements) => {
		const formElementsArray = [];
		for (let key in inputElements) {
			formElementsArray.push({ id: key, config: inputElements[key] });
		}
		return formElementsArray;
	}

	filterValuesFromObject = (inputElements) => {
		const formData = {};
        for (let formElementIdentifier in inputElements) {
            formData[formElementIdentifier] = inputElements[formElementIdentifier].value;
		}
		return formData;
	}

	inputChangedHandler = (event, inputIdentifier) => {

		const updatedEventEditForm = {
            ...this.state.inputElements
        };
        
		const updatedFormElement = {
			...updatedEventEditForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedEventEditForm[inputIdentifier] = updatedFormElement;

		this.setState({ inputElements: updatedEventEditForm });
	};

	createInputFromConfig(x) {
		return (
			<Input key={x.id} 
				{...x.config} 
				value={x.config.value} 
				changed={event => this.inputChangedHandler(event, x.id)} 
			/>);
	}
	
	submitHandler = (event) => {
		event.preventDefault();
		const formData = this.filterValuesFromObject(this.state.inputElements);
		this.props.submit(formData);		
	};

	render() {
		const formElementsArray = this.convertObjectToElementsArray(this.state.inputElements);
		const elements = formElementsArray.map(x=> this.createInputFromConfig(x));

		return (
			<form className={classes.Form} onSubmit={this.submitHandler} >				
				{elements}
				{this.props.children}
			</form>
		);
	}
}

export default Form;