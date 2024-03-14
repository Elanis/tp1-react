import { useEffect, useState } from 'react';

export default function useWeather() {
	const [temperatures, setTemperatures] = useState([]);

	useEffect(() => {
		async function getData() {
			// API
			const result = await fetch(
				'https://api.open-meteo.com/v1/forecast?latitude=50.9&longitude=1.86&hourly=temperature_2m', {
					headers: {
						Authorization: 'Bearer sdgdsgdsgsdgsdg',
					}
				}
			);

			if(!result.ok) {
				throw 'Pas OK !';
			}

			const data = await result.json();

			// Formattage
			const newTemp = [];
			for(let i = 0; i < data.hourly.temperature_2m.length; i++) {
				newTemp.push({
					temperature: data.hourly.temperature_2m[i],
					time: data.hourly.time[i]
				})
			}

			setTemperatures(newTemp);
		}

		getData();
	}, []);


	return temperatures;
}