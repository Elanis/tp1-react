import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';

import { CounterContextProvider } from './hooks/useCounter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterContextProvider>
			<Router />
		</CounterContextProvider>
	</React.StrictMode>,
);
