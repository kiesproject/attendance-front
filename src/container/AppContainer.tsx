import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import Root from '../components/Root';
import Login from '../components/Login';

import { increase, decrease } from '../action/index';

interface ContainerProperties {
  number: number,
  dispatch: any,
}

class AppContainer extends React.Component<ContainerProperties, any> {
  constructor(props: ContainerProperties) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(count: number): void {
    const { dispatch } = this.props;
    dispatch(increase(count));
  }

  decrease(count: number): void {
    const { dispatch } = this.props;
    dispatch(decrease(count));
  }

  render() {
    const { number } = this.props;
    return (
      <BrowserRouter basename="/">
        <div className="content">
          <h1>Welcome to サボらん♨️</h1>
          <div className="routings">
            <Switch>
              <Route
                path="/login"
                component={Login}
              />
              <Route
                path="/root"
                component={Root}
              />
              <Route
                exact
                path="/"
                render={
                  props => <Home increase={this.increase} decrease={this.decrease} number={number} />
                }
              />
            </Switch>
          </div>
          <header>
            Links:
            {' '}
            <Link to="/">Home</Link>
            {' '}
            <Link to="/login">Login</Link>
            {' '}
            <Link to="/root">RootPage</Link>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state: any): object {
  return ({
    number: state.number,
  });
}

export default connect(mapStateToProps)(AppContainer);
