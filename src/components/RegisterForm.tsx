import * as React from 'react';
import Error from '../models/Error';

interface RegisterFormProperties {
  error: Error;
  register(name: string, password: string): void;
  handleError(isError: boolean, message: string): void;
}

interface RegisterFormState {
  name: string;
  password: string;
  passwordOnce: string;
}

class RegisterForm extends React.Component<
  RegisterFormProperties,
  RegisterFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      password: '',
      passwordOnce: '',
    };
    this.handleRegister = this.handleRegister.bind(this);
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
    const { error } = this.props;
    const rootLabel = location.pathname === '/' ? 'root-label' : '';
    return (
      <form className="siimple-form">
        <div className={[rootLabel, ' siimple-form-title'].join(' ')}>登録</div>
        <div className="siimple-form-field">
          <div className={[rootLabel, ' siimple-form-field-label'].join(' ')}>
            ユーザー名
          </div>
          <input
            type="text"
            className="siimple-input siimple-input--fluid"
            required
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
          />
        </div>
        <div className="siimple-form-field">
          <div className={[rootLabel, ' siimple-form-field-label'].join(' ')}>
            パスワード
          </div>
          <input
            type="password"
            className="siimple-input siimple-input--fluid"
            required
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          />
          <div className={[rootLabel, ' siimple-field-helper'].join(' ')}>
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
          <div className={[rootLabel, ' siimple-field-helper'].join(' ')}>
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
          <div className="siimple-form-field-helper siimple--color-red-dark">
            {error.message}
          </div>
        )}
      </form>
    );
  }
}

export default RegisterForm;
