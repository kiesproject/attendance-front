import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Account from '../../models/Account';

interface LoginProperties {
  login(id: string, password: string): void;
  account: Account;
}

interface LoginState {
  name: string;
  password: string;
}

class Login extends React.Component<LoginProperties, LoginState> {
  constructor(props: LoginProperties) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  render() {
    const { login, account } = this.props;
    return account.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <form
        className="siimple-form login-form"
        autoComplete="off"
        method="post"
      >
        <div className="siimple-form-title">ログイン</div>
        <div className="siimple-form-field">
          <div className="siimple-form-field-label">ユーザー名</div>
          <input
            type="text"
            className="siimple-input siimple-input--fluid"
            placeholder="kiesproject"
            required
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="siimple-form-field">
          <div className="siimple-form-field-label">パスワード</div>
          <input
            type="password"
            className="siimple-input siimple-input--fluid"
            placeholder="*********"
            required
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <div className="siimple-form-field">
          <button
            className="siimple-btn siimple-btn--blue"
            type="button"
            onClick={() => login(this.state.name, this.state.password)}
          >
            ログイン
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
