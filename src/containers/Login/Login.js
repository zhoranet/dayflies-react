import React, { Component } from "react";
import classes from "./Login.module.scss";
import Button from "../../components/Button/Button";

export class Login extends Component {
	render() {
		return (
			<div className={classes.Login}>
				<form>
					<div className={classes.Input}>
						<label className={classes.Label}>Name</label>
						<input />
					</div>

					<div className={classes.Input}>
						<label className={classes.Label}>Password</label>
						<input />
					</div>

					<Button btnType="Login">Login</Button>
				</form>
			</div>
		);
	}
}

export default Login;
