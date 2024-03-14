import { useEffect, useState } from 'react';

import monTraitementPourBody from '../../business/monTraitementPourBody.js';

import { useCounter, useCounterSetter } from '../../hooks/useCounter.jsx';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';

import './index.css';

export default function Home() {
	const count = useCounter();
	const setCount = useCounterSetter();

	const [count2, setCount2] = useState(0);

	const { width, height } = useWindowDimensions();

	useEffect(() => {
		document.title = `(${count2}) Application React`;
	}, [count2]);

	const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	const elements = text.split(' ');

	return (
		<div className="body">
			<p>Compteur: {count}</p>
			<p>Compteurs: {count + count2}</p>

			<p>Taille: {width}x{height}</p>

			<input type="button" onClick={() => setCount((currCount) => currCount + 1)} value="Plus!" />
			<input type="button" onClick={() => setCount(monTraitementPourBody)} value="Plus (l'autre)!" />
			<input type="button" onClick={() => setCount2((currCount) => currCount + 1)} value="Plus (count2)!" />

			<ul>
				{elements.map((element, i) => <li key={i}>{element}</li>)}
			</ul>
		</div>
	);
}

/*
export default function Body() {
	const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	const elements = text.split(' ');
	
	// Generation de la liste
	const liste = [];
	for(const element of elements) {
		liste.push(<li>{element}</li>);
	}

	return (
		<div className="body">
			<ul>
				{liste}
			</ul>
		</div>
	);
}
*/
