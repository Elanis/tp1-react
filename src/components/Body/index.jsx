import './index.css';

export default function Body() {
	const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
	const elements = text.split(' ');

	return (
		<div className="body">
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
