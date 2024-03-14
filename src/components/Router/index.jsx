import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import Layout from '../Layout';

const router = createBrowserRouter([
	{
	    element: <Layout />,
	    children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		]
	}
]);

export default function Router() {
	return (
		<RouterProvider router={router} />
	);
}
