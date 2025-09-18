// react counter component

import {useState} from "react";

export const Counter = () => {
	console.log("Counter component rendered");
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			Counter: {count}
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};
