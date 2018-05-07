import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProperties {
  loggedIn: boolean;
  username: string | null;
  isAdmin: boolean | null;
}

class UserNavigation extends React.Component<NavbarProperties, any> {
  render() {
    const { loggedIn, isAdmin } = this.props;
    if (loggedIn) {
      return (
        <div>
          {isAdmin && <a className="siimple-navbar-link">管理画面</a>}
          <div className="siimple-btn siimple-btn--navy">ログアウト</div>
        </div>
      );
    }
    return (
      <Link to="/login" className="siimple-btn siimple-btn--blue">
        ログイン
      </Link>
    );
  }
}

class Navbar extends React.Component<NavbarProperties, any> {
  render() {
    const { loggedIn, username, isAdmin } = this.props;
    return (
      <div className="siimple-navbar siimple-navbar--teal siimple-navbar--fluid">
        <Link to="/" className="siimple-navbar-title">
          サボらん♨
        </Link>
        <div className="siimple-layout--right">
          <UserNavigation
            loggedIn={loggedIn}
            username={username}
            isAdmin={isAdmin}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
