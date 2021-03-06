import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import colorReducer from './store/reducers/colors'
import usersReducer from './store/reducers/users'
import numberReducer from './store/reducers/number'

import fontawesome from '@fortawesome/fontawesome'
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

fontawesome.library.add(faCheckSquare, faCoffee, faTimes)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    colors: colorReducer,
    users: usersReducer,
    number: numberReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
