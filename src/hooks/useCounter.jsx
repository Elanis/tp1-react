import { createContext, useContext, useEffect, useState } from 'react';

const CounterContext = createContext();

export function CounterContextProvider({ children }) {
	const [count, setCount] = useState(parseInt(localStorage.counter, 10) || 0);

	useEffect(() => {
		localStorage.counter = count;
	}, [count]);
	
	return (
		<CounterContext.Provider value={{count, setCount}}>
			{children}
		</CounterContext.Provider>
	);
}

export function useCounter() {
	const { count } = useContext(CounterContext);

	return count;
}

export function useCounterSetter() {
	const { setCount } = useContext(CounterContext);

	return setCount;
}
