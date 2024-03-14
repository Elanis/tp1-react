import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function CounterContextProvider({ children }) {
	const [count, setCount] = useState(0);

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
