


export default function createStore(reducer, enhancer) {

	if (typeof enhancer !== 'undefined') {
		return enhancer(createStore)(reducer)
	}

	let currentState = undefined;
	let currentReducer = reducer;
	let listeners = [];

	function getState() {
		return currentState;
	}

	function dispatch(action) {
		currentState = currentReducer(currentState, action)
		console.log('you dispatched state now', currentState);


    	for (let i = 0; i < listeners.length; i++) {
      		const listener = listeners[i]
      		listener()
    	}
	}

	function subscribe(listener) {
		listeners.push(listener);
		console.log('how many listeners?', listeners.length);

		let isSubscribed = true;

		return function unsubscribe() {
			console.log('unsubscribing!');

			if (!isSubscribed) {
		        return;
		    }

		    isSubscribed = false;


			const index = listeners.indexOf(listener);
			listeners.splice(index, 1);
			console.log('how many listeners after unsub?', listeners.length);
		}
	}

	dispatch({ type: '@@redux/INIT' });

	return {
		getState,
		dispatch,
		subscribe
	};
}