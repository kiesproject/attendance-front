import * as React from 'react';
import { Redirect } from 'react-router-dom';

import Account from '../../models/Account';
import Error from '../../models/Error';

interface LoginProperties {
  login(id: string, password: string): void;
  account: Account;
  error: Error;
  handleError(isError: boolean, message: ''): void;
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
    const { handleError } = this.props;
    handleError(false, '');
  }

  handleLogin(
    event: React.FormEvent<HTMLElement>,
    name: string,
    password: string,
  ) {
    const { login, handleError } = this.props;
    if (name === '' || password === '') {
      return;
    }
    handleError(false, '');
    login(name, password);
    event.preventDefault();
  }

  render() {
    const { account, error } = this.props;
    return account.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <div className="login-form">
        <form className="siimple-form">
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
              onChange={event =>
                this.setState({ password: event.target.value })
              }
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
      </div>
    );
  }
}

export default Login;
