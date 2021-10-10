import { combineReducers } from 'redux';

import characters from './marvel/character/index/reducer';

const appReducer = combineReducers({
  characters,
});

const rootReducer = (state, action) => {
  if (action.type === '@CLEAR_REDUCERS') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
