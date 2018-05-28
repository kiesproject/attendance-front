import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Account from '../../models/Account';
import Error from '../../models/Error';

interface RegisterProperties {
  account: Account;
  error: Error;
  refreshError(): void;
}

interface RegisterState {
  name: string;
  password: string;
}

class Register extends React.Component<RegisterProperties, RegisterState> {
  constructor(props: RegisterProperties) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillMount() {
    const { refreshError } = this.props;
    refreshError();
  }

  handleRegister(
    event: React.FormEvent<HTMLElement>,
    name: string,
    password: string,
  ) {
    console.log('handleRegister', name, password);
  }

  render() {
    const { account, error } = this.props;
    return account.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <form className="siimple-form login-form">
        <div className="siimple-form-title">登録</div>
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
              this.handleRegister(event, this.state.name, this.state.password)
            }
          >
            登録
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

export default Register;
