import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Account from '../../models/Account';
import Error from '../../models/Error';

interface LoginProperties {
  login(id: string, password: string): void;
  account: Account;
  error: Error;
  refreshError(): void;
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
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    const { refreshError } = this.props;
    refreshError();
  }

  handleLogin(
    event: React.FormEvent<HTMLElement>,
    name: string,
    password: string,
  ) {
    const { login, refreshError } = this.props;
    if (name === '' || password === '') {
      return;
    }
    refreshError();
    login(name, password);
    event.preventDefault();
  }

  render() {
    const { account, error } = this.props;
    return account.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <form className="siimple-form login-form">
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
            type="submit"
            onClick={event =>
              this.handleLogin(event, this.state.name, this.state.password)
            }
          >
            ログイン
          </button>
        </div>
        {error.isError && (
          <div className="siimple-form-field-helper siimple--color-red">
            {error.message}
          </div>
        )}
      </form>
    );
  }
}

export default Login;
