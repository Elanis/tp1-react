import { useCounter } from '../../hooks/useCounter.jsx';

export default function Contact() {
	const count = useCounter();

	return (
		<>
			<p>Un text random</p>
			<p>{count}</p>
		</>
	);
}