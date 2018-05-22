import * as React from 'react';

import Account from '../../models/Account';

interface HomeScreenProperties {
  account: Account;
  number: number;
  increase(count: number): void;
  decrease(count: number): void;
}

class Home extends React.Component<HomeScreenProperties, any> {
  render() {
    const { account, number, increase, decrease } = this.props;
    return account.loggedIn ? (
      <div>
        Some state changes:
        {number}
        <div>
          <button onClick={() => increase(1)}>Increase</button>
          <button onClick={() => decrease(1)}>Decrease</button>
        </div>
      </div>
    ) : (
      // TODO: not logged in screen
      <div>not login</div>
    );
  }
}

export default Home;
