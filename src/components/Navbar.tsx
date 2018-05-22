import * as React from 'react';
import { Link } from 'react-router-dom';

import Account from '../models/Account';

interface NavbarProperties {
  account: Account;
}

const UserNavigation = (account: Account) => {
  return account.loggedIn ? (
    <div>
      {account.isAdmin && <a className="siimple-navbar-link">管理画面</a>}
      <div
        className="siimple-btn siimple-btn--navy"
        // TODO: dispatch logout action
        onClick={() => console.log('hoge')}
      >
        ログアウト
      </div>
    </div>
  ) : (
    <Link to="/login" className="siimple-btn siimple-btn--blue">
      ログイン
    </Link>
  );
};

class Navbar extends React.Component<NavbarProperties, any> {
  render() {
    const { account } = this.props;
    return (
      <div className="siimple-navbar siimple-navbar--orange siimple-navbar--fluid">
        <Link to="/" className="siimple-navbar-title">
          サボらん♨
        </Link>
        <div className="siimple-layout--right">{UserNavigation(account)}</div>
      </div>
    );
  }
}

export default Navbar;
