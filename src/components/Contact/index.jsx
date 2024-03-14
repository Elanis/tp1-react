import { useCounter } from '../../hooks/useCounter.jsx';

import View from './view.jsx';

export default function Contact() {
	const count = useCounter();

	return (
		<View count={count} />
	);
}