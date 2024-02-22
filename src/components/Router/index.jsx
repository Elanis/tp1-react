import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import App from '../App';
import Contact from '../Contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);

export default function Router() {
	return (<RouterProvider router={router} />);
}
