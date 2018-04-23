import { combineReducers } from 'redux';
const initialState = 1;

function number(state = initialState, action: any): number {
  switch (action.type) {
    case 'INCREASE': {
      return state + action.amount;
    }
    case 'DECREASE': {
      return state - action.amount;
    }
    default: {
      return state;
    }
  }
}

const appReducer = combineReducers({
  number,
});

export default appReducer;
