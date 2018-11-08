import React, { Component } from "react";
import classes from "./Login.module.scss";
import { Redirect } from 'react-router-dom';
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { withRouter } from "react-router-dom";

export class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	changeValue = (e, name) => {
		if (name === "email") {
			this.setState({ email: e.target.value });
		}
		if (name === "password") {
			this.setState({ password: e.target.value });
		}
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onAuth(this.state.email, this.state.password);
	};

	render() {


		let errorMessage = null;

		if (this.props.error) {
			errorMessage = (
				<p>{this.props.error.message}</p>
			);
		}

		let authRedirect = null;
		if (this.props.isAuth) {
			authRedirect = <Redirect to={this.props.authRedirectPath} />
		}



		return (
			<div className={classes.Login}>
				
				{authRedirect}
				{errorMessage}

				<header>
					<h3>Admin</h3>
				</header>
				<main className={classes.LoginContent}>
					<form onSubmit={this.submitHandler}>
						<div className={classes.Input}>
							<input
								type="email"
								placeholder="Email"
								value={this.state.value}
								required
								onChange={e => this.changeValue(e, "email")}
							/>
						</div>

						<div className={classes.Input}>
							<input
								type="password"
								placeholder="Password"
								value={this.state.value}
								required
								onChange={e => this.changeValue(e, "password")}
							/>
						</div>

						<Button btnType="Login">Login</Button>
					</form>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuth: state.auth.token !== null,
		authRedirectPath: state.auth.authRedirectPath
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Login));
