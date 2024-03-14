import formatLocaleTime from '../../business/formatLocaleTime';

import './index.css';

export default function Weather({ temperatures }) {
	return (
		<table id="weather">
			<thead>
				<tr>
					<th>Heure</th>
					<th>Temperature (°C)</th>
				</tr>
			</thead>
			<tbody>
				{temperatures.map((temp) => 
					<tr key={temp.time}>
						<td>{formatLocaleTime(temp.time)}</td>
						<td>{temp.temperature}</td>
					</tr>
				)}
			</tbody>
		</table>
	);
}