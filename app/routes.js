import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Editor from './components/Editor';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Editor} />
		<Route path="/about" component={About} />
	</Route>
);
