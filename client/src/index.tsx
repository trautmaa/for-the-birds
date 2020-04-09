import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link } from 'wouter';
import { WhatTheCrud } from './Components/WhatTheCrud';
import { Sidebar } from './Components/Sidebar';

ReactDOM.render(
	<React.StrictMode>
		<Sidebar />
		<Route path="/game">
			<App />
		</Route>
		<Route path="/">Home page</Route>
		<Route path="/questions">
			<WhatTheCrud url="http://localhost:5000/questions" />
		</Route>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
