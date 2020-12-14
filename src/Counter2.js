import React from 'react';

import store from './requax';

console.log('what is this?', store);

export default class Counter2 extends React.Component {
	
	constructor() {
		super();

		this.state = store.getState();
	}

	componentDidMount() {
		this.unsub = store.subscribe(() => {
			this.setState(store.getState());
		});
	}

	componentWillUnmount() {
		console.log('unmounting');
		this.unsub();
	}

	handleClick = () => {
		const action = { type: 'INCREMENT' };
		store.dispatch(action);
	}

	render() {
		return (
			<div>
				<h1>Counter #2</h1>
				<p>Count: {this.state.count}</p>
				<button onClick={this.handleClick}>increment</button>
			</div>
		);
	}
}