import useWeather from '../../hooks/useWeather';

import View from './view.jsx';

export default function Weather() {
	const temperatures = useWeather();

	return (
		<View
			temperatures={temperatures}
		/>
	);
}