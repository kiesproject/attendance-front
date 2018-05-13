import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../components/screens/Home';
import Login from '../components/screens/Login';

import { decrease, increase, login } from '../action';
import Navbar from '../components/Navbar';

interface AppContainerProperties {
  number: number;
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
    dispatch(login(id, password));
  }

  render() {
    const { number } = this.props;
    return (
      <BrowserRouter basename="/">
        <div className="content">
          <Navbar loggedIn={false} />
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
  };
}

export default connect(mapStateToProps)(AppContainer);
