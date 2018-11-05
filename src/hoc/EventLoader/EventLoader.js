import React, { Component } from "react";
// import * as dateUtils from "../../shared/dateUtils";
// import moment from "moment";

const withEventLoader = WrappedComponent => {
	return class extends Component {
		componentDidMount() {
			console.log("withEventLoader", this.props.history);

			this.unlisten = this.props.history.listen((location, action) => {
				console.log("withEventLoader - history.listen");
			});

			console.log("withEventLoader - componentDidMount");
		}

		componentWillUnmount() {
			console.log("withEventLoader - componentWillUnmount");

			this.unlisten();
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default withEventLoader;
