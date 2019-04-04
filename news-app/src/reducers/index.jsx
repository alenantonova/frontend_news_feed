import { createStore, combineReducers, applyMiddleware } from 'redux';
import postsNumberReducer from './postsNumber';

const logger = store => next => action => {
	let result;
	console.groupCollapsed("dispatching", action.type);
	console.log('prev state', store.getState());
	console.log('action', action);
	result = next(action);
	console.log('next state', store.getState());
	console.groupEnd();
	return result;
};

const saver = store => next => action => {
	let result = next(action);
	return result;
};

const initStorage = (initialState = {}) => {
	return initialState; 
};

export const storeFactory = (initialState = {}) => (
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({
			num: postsNumberReducer,
		}), initStorage(initialState)
	)
);
