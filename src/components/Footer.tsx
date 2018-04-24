import * as React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component<any, any> {
  render() {
    return (
      <div className="footer">
        Links: <Link to="/home">Home</Link> <Link to="/login">Login</Link>{' '}
        <Link to="/root">RootPage</Link>
      </div>
    );
  }
}

export default Footer;
