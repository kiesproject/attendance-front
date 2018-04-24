import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import { createStore } from 'redux';

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
