import './index.css';

export default function Header({ name }) {
	return (
		<div className="header">
			Hello {name} !
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