import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import calendarReducer from "./store/reducers/calendar";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(calendarReducer, composeEnhancers(applyMiddleware(thunk)));
const app = (
    <Provider store={store}>    
        <BrowserRouter>
            <App />        
        </BrowserRouter>            
    </Provider>    
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
