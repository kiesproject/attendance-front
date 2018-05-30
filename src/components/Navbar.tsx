import * as React from 'react';
import { Link } from 'react-router-dom';

import Account from '../models/Account';

interface NavbarProperties {
  account: Account;
  logout(): void;
}

const UserNavigation = (account: Account, logout: () => void) => {
  return account.loggedIn ? (
    <div>
      <Link to="/home" className="siimple-navbar-link">
        ようこそ{account.username}さん
      </Link>
      {account.isAdmin && <a className="siimple-navbar-link">管理画面</a>}
      <Link
        to="/"
        className="siimple-btn siimple-btn--navy"
        onClick={() => logout()}
      >
        ログアウト
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/login" className="siimple-btn siimple-btn--blue">
        ログイン
      </Link>
    </div>
  );
};

class Navbar extends React.Component<NavbarProperties, any> {
  render() {
    const { account, logout } = this.props;
    return (
      <div className="siimple-navbar siimple-navbar--orange siimple-navbar--fluid">
        <Link to="/" className="siimple-navbar-title">
          サボらん♨
        </Link>
        <div className="siimple-layout--right">
          {UserNavigation(account, logout)}
        </div>
      </div>
    );
  }
}

export default Navbar;
