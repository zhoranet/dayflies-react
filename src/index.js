import "./styles/normalize.scss";
import "./styles/typography.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import calendarReducer from "./store/reducers/calendar";
import authReducer from "./store/reducers/auth";
import eventsReducer from "./store/reducers/events";
import createSagaMiddleware from "redux-saga";
import { watchCalendar, watchAuth, watchEvents } from "./store/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
	calendar: calendarReducer,
	auth: authReducer,
	events: eventsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCalendar);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchEvents);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
