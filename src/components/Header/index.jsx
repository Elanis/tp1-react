import './index.css';
import { Link } from "react-router-dom";

export default function Header({ name }) {
	let sentence = '';
	if(name === 'Axel') {
		sentence = 'Hello Axel';
	} else {
		sentence = `Salut ${name}`;
	}

	return (
		<div className="header">
			<ul>
				<li><Link to={'/'}>Home</Link></li>
				<li><Link to={'/contact'}>Contact</Link></li>
			</ul>
			Hello {sentence} !
		</div>
	);
}

/***
 * ===
 * 
export default function Header({ name }) {
	return <div className="header">
			Hello {name} !
		</div>;
}
*/