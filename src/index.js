import "./styles/normalize.scss";
import "./styles/typography.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import eventsReducer from "./store/reducers/events";
import authReducer from "./store/reducers/auth";
import occasionsReducer from "./store/reducers/occasions";
import createSagaMiddleware from "redux-saga";
import { watchCalendar, watchAuth, watchOccasions } from "./store/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
	auth: authReducer,
	events: eventsReducer,
	occasions: occasionsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCalendar);
sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOccasions);

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
