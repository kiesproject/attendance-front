import * as React from 'react';

interface LoginProperties {
  login: (id: string, password: string) => void;
}

interface LoginState {
  id: string;
  password: string;
}

class Login extends React.Component<LoginProperties, LoginState> {
  constructor(props: LoginProperties) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
  }

  render() {
    const { login } = this.props;
    return (
      <div className="siimple-form login-form">
        <div className="siimple-form-title">ログイン</div>
        <div className="siimple-form-field">
          <div className="siimple-form-field-label">ユーザー名</div>
          <input
            type="text"
            className="siimple-input siimple-input--fluid"
            placeholder="kiesproject"
            required
            value={this.state.id}
            onChange={event => this.setState({ id: event.target.value })}
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
          <div
            className="siimple-btn siimple-btn--blue"
            onClick={() => login(this.state.id, this.state.password)}
          >
            ログイン
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
