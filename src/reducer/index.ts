import { combineReducers } from 'redux';

import Account from '../models/Account';
import Error from '../models/Error';

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
    case 'LOGOUT': {
      return {
        loggedIn: false,
        isAdmin: false,
        username: '',
      };
    }
    default: {
      return state;
    }
  }
}

const initialErrorState: Error = {
  isError: false,
  message: '不明なエラー',
};

function error(state = initialErrorState, action: any): Error {
  switch (action.type) {
    case 'LOGIN_ERROR': {
      return {
        isError: action.isError,
        message: action.message,
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
  error,
});
