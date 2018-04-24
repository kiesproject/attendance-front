import * as React from 'react';

class Login extends React.Component<any, any> {
  render() {
    return (
      <div className="loginComponent">
        <h3 className="header">Please Login</h3>
        <div className="form">
          <dl>
            <dt>
              <label>ID</label>
            </dt>
            <dd>
              <input type="text" name="name" className="input" />
            </dd>
            <dt>
              <label>Password</label>
            </dt>
            <dd>
              <input type="text" name="name" className="input" />
            </dd>
          </dl>
          <button className="loginButton">ログインor登録</button>
        </div>
      </div>
    );
  }
}

export default Login;
