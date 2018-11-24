import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import EventList from "./containers/EventList/EventList";
import EventDetails from "./containers/EventDetails/EventDetails";
import EventListEditor from "./containers/EventListEditor/EventListEditor";
import EventEdit from "./containers/EventEdit/EventEdit";
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
					<Route path="/edit/:id" exact component={EventEdit} />
					<Route path="/:language/:date" exact component={EventList} />
					<Route path="/login" component={Login} />
					<Route path="/edit" component={EventListEditor} />
					<Route path="/test" component={TestBench} />
				</Switch>
			</Layout>
		);
	}
}

export default App;
