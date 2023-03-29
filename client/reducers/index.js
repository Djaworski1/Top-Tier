import { combineReducers } from 'redux';

// import all reducers here
import cardsReducer from './cardsReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  cards: cardsReducer,
});

// make the combined reducers available for import
export default reducers;