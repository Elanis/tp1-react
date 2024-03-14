import { useCounter, useCounterSetter } from '../../hooks/useCounter.jsx';
import useWindowDimensions from '../../hooks/useWindowDimensions.js';

import View from './view';

export default function Home() {
	const count = useCounter();
	const setCount = useCounterSetter();

	const { width, height } = useWindowDimensions();

	return (
		<View
			count={count}
			setCount={setCount}
			width={width}
			height={height}
		/>
	);
}