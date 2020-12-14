import createStore from './createStore';
//console.log('create store?', createStore);

const initialState = {
	count: 2
};

const reducer = (state = initialState, action) => {
	console.log('requaxer', action);

	switch (action.type) {
		case 'INCREMENT':
			return Object.assign({}, state, { count: state.count + 1 });
		default:
			return state;
	}
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
