import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import EventList from "./containers/Events/EventList/EventList";
import EventDetails from "./containers/Events/EventDetails/EventDetails";
import OccasionList from "./containers/Occasions/OccasionList/OccasionList";
import OccasionDetails from "./containers/Occasions/OccasionDetails/OccasionDetails";
import Login from "./containers/Login/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Route, Switch } from "react-router-dom";
import {
	faEnvelope,
	faChevronRight,
	faChevronLeft,
	faBars,
	faAngleDoubleLeft,
	faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
import { TestBench } from "./containers/TestBench/TestBench";

library.add(faEnvelope, faChevronRight, faChevronLeft, faBars, faAngleDoubleLeft, faAngleDoubleRight);

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={EventList} />
					<Route path="/event/:language/:date/:id" exact component={EventDetails} />
					<Route path="/edit/:id" exact component={OccasionDetails} />
					<Route path="/:language/:date" exact component={EventList} />
					<Route path="/login" component={Login} />
					<Route path="/edit" component={OccasionList} />
					<Route path="/test" component={TestBench} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
