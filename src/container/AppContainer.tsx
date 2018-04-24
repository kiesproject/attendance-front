import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from '../components/Footer';
import Home from '../components/screens/Home';
import Login from '../components/screens/Login';
import Root from '../components/screens/Root';

import { decrease, increase } from '../action';

interface ContainerProperties {
  number: number;
  dispatch: any;
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
          <h1>Welcome to サボらん♨</h1>
          <div className="routings">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/root" component={Root} />
              <Route
                exact
                path="/"
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
          <Footer />
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
