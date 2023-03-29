import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/index.js';
// import reducers from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = configureStore({
    reducer: reducer,
});

export default store;