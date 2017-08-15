import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

const render = () => {
	const state = store.getState()
	ReactDOM.render(<App {...state} />, document.getElementById('root'));
}

render()

store.subscribe(render)

setTimeout(() => {
	store.dispatch({
		type: 'ADD_TODO',
		payload: {
			id: 4,
			name: 'To id',
			isCompleted: false
		}
	})
}, 1000)

registerServiceWorker();
