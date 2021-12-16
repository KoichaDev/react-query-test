import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const queryClient = new QueryClient()


ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</QueryClientProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
