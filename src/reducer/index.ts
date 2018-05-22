import { combineReducers } from 'redux';

import Account from '../models/Account';

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

const initialAccountState: Account = {
  loggedIn: false,
  isAdmin: false,
  username: 'けつばん',
};

function account(state = initialAccountState, action: any): Account {
  switch (action.type) {
    case 'LOGIN': {
      return {
        loggedIn: true,
        isAdmin: action.isAdmin,
        username: action.username,
      };
    }
    default: {
      return state;
    }
  }
}

export const appReducer = combineReducers({
  number,
  account,
});
