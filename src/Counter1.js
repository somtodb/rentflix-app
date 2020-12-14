import React from 'react';
import store from './redux';

console.log('what is this?', store);

export default class Counter1 extends React.Component {
	
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
		this.unsub();
	}

	handleClick = () => {
		const action = { type: 'INCREMENT' };
		store.dispatch(action);
	}

	render() {
		return (
			<div>
				<h1>Counter #1</h1>
				<p>Count: {this.state.count}</p>
				<button onClick={this.handleClick}>increment</button>
			</div>
		);
	}
}