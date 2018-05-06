import * as React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component<any, any> {
  render() {
    return (
      <div className="siimple-navbar siimple-navbar--teal siimple-navbar--fluid">
        <Link to="/" className="siimple-navbar-title">
          サボらん♨
        </Link>
        <div className="siimple-layout--right">
          <Link to="/login" className="siimple-btn siimple-btn--blue">
            ログイン
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
