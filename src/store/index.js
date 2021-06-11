import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from './reducers/index';

let middlewares = [];

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducers, middleware);

export default store;