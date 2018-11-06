import './styles/normalize.scss';
import './styles/typography.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import calendarReducer from "./store/reducers/calendar";
import createSagaMiddleware from "redux-saga";
import { watchCalendar } from "./store/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(calendarReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchCalendar);

const app = (
    <Provider store={store}>    
        <BrowserRouter>
            <App />        
        </BrowserRouter>            
    </Provider>    
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
