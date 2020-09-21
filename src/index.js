import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// };

// const incDispatch = bindActionCreator(inc, dispatch);
// const decDispatch = bindActionCreator(dec, dispatch);
// const rndDispatch = bindActionCreator(rnd, dispatch);

const {inc, dec, rnd} = 
    bindActionCreators(actions, dispatch);

const App = () => {
    return (
        <Counter 
			counter={store.getState()}
			inc={inc}
			dec={dec}
			rnd={() => {
				const payload = Math.floor(Math.random()*10);
				return rnd(payload);
			}} />
    );
}

const update = () => {
	ReactDOM.render(<App />, document.querySelector('#root'));
}

update();
store.subscribe(update);