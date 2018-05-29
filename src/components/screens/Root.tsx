import * as React from 'react';
import { Redirect } from 'react-router-dom';
import Account from '../../models/Account';
import Error from '../../models/Error';

interface RegisterProperties {
  account: Account;
  error: Error;
  register(name: string, password: string): void;
  handleError(isError: boolean, message: string): void;
}

interface RegisterState {
  name: string;
  password: string;
  passwordOnce: string;
}

class Root extends React.Component<RegisterProperties, RegisterState> {
  constructor(props: RegisterProperties) {
    super(props);
    this.state = {
      name: '',
      password: '',
      passwordOnce: '',
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillMount() {
    const { handleError } = this.props;
    handleError(false, '');
  }

  handleRegister(
    event: React.FormEvent<HTMLElement>,
    name: string,
    password: string,
    passwordOnce: string,
  ) {
    const { register, handleError } = this.props;
    if (name === '' || password === '' || passwordOnce === '') {
      return;
    }
    if (password !== passwordOnce) {
      event.preventDefault();
      handleError(true, '異なるパスワードを入力しています');
      this.setState({ password: '', passwordOnce: '' });
      return;
    }
    handleError(false, '');
    register(name, password);
    event.preventDefault();
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
          <div className="siimple-field-helper">
            英数字と記号のみ使用可能です
          </div>
          <input
            type="password"
            className="siimple-input siimple-input--fluid"
            required
            value={this.state.passwordOnce}
            onChange={event =>
              this.setState({ passwordOnce: event.target.value })
            }
          />
          <div className="siimple-field-helper">
            もう一度パスワードを入力してください。
          </div>
        </div>
        <div className="siimple-form-field">
          <button
            className="siimple-btn siimple-btn--green"
            type="submit"
            onClick={event =>
              this.handleRegister(
                event,
                this.state.name,
                this.state.password,
                this.state.passwordOnce,
              )
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

export default Root;
