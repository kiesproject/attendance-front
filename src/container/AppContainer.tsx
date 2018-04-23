import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from '../components/screens/Home';
import Root from '../components/screens/Root';
import Login from '../components/screens/Login';
import Footer from '../components/Footer';

import { increase, decrease } from '../action';

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
