import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';

import AppContainer from './container/AppContainer';
import { appReducer } from './reducer';

const store = createStore(appReducer);

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={AppContainer} />
    </Router>
  </Provider>,
  document.getElementById('content'),
);
