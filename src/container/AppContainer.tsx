import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/screens/Home';
import Login from '../components/screens/Login';

import { decrease, increase, loginAsync } from '../action';
import Navbar from '../components/Navbar';
import Account from '../models/Account';

interface AppContainerProperties {
  number: number;
  account: Account;
  dispatch: any;
}

class AppContainer extends React.Component<AppContainerProperties, any> {
  constructor(props: AppContainerProperties) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.login = this.login.bind(this);
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

  render() {
    const { number, account } = this.props;
    return (
      <BrowserRouter basename="/">
        <div className="content">
          <Navbar account={account} />
          <Switch>
            <Route path="/login" render={() => <Login login={this.login} />} />
            <Route
              path="/home"
              render={() => (
                <Home
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
  };
}

export default connect(mapStateToProps)(AppContainer);
