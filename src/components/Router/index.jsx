import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

import Contact from '../Contact';
import Energie from '../Energie';
import Formulaire from '../Formulaire';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import Layout from '../Layout';
import Weather from '../Weather';

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
			{
				path: '/energie',
				element: <Energie />,
			},
			{
				path: '/weather',
				element: <Weather />,
			}, {
				path: '/formulaire',
				element: <Formulaire />,
			}
		]
	}
]);

export default function Router() {
	return (
		<RouterProvider router={router} />
	);
}
