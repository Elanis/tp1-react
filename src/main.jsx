import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';

import { CounterContextProvider } from './hooks/useCounter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
		<CounterContextProvider>
			<Router />
		</CounterContextProvider>
);
