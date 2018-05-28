import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import Register from '../components/screens/Register';

import { decrease, error, increase, loginAsync, logout } from '../action';
import Navbar from '../components/Navbar';
import Account from '../models/Account';
import Error from '../models/Error';

interface AppContainerProperties {
  number: number;
  account: Account;
  error: Error;
  dispatch: any;
}

class AppContainer extends React.Component<AppContainerProperties, any> {
  constructor(props: AppContainerProperties) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.logout = this.logout.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  increase(count: number): void {
    const { dispatch } = this.props;
    dispatch(increase(count));
  }

  decrease(count: number): void {
    const { dispatch } = this.props;
    dispatch(decrease(count));
  }

  login(id: string, password: string): void {
    const { dispatch } = this.props;
    dispatch(loginAsync(id, password));
  }

  register(name: string, password: string): void {
    const { dispatch } = this.props;
    dispatch(loginAsync(name, password));
  }

  logout(): void {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  handleError(isError: boolean, message: string): void {
    const { dispatch } = this.props;
    dispatch(error(isError, message));
  }

  render() {
    const { number, account, error } = this.props;
    return (
      <BrowserRouter basename="/">
        <div className="content">
          <Navbar account={account} logout={this.logout} />
          <Switch>
            <Route
              path="/login"
              render={() => (
                <Login
                  login={this.login}
                  account={account}
                  error={error}
                  handleError={this.handleError}
                />
              )}
            />
            <Route
              path="/register"
              render={() => (
                <Register
                  register={this.register}
                  account={account}
                  error={error}
                  handleError={this.handleError}
                />
              )}
            />
            <Route
              path="/home"
              render={() => (
                <Home
                  account={account}
                  increase={this.increase}
                  decrease={this.decrease}
                  number={number}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state: any): object {
  return {
    number: state.number,
    account: state.account,
    error: state.error,
  };
}

export default connect(mapStateToProps)(AppContainer);
