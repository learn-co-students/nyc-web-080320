import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import rootReducer from './Redux/reducer'
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducer, applyMiddleware(thunk))

// store !== state
// dispatch

// rootReducer => reducer function => return the new state 

// actions
// dispatch(action) => call the reducer 




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// 1. create the store
// 2. set up my reducer 