import * as React from 'react';

class Login extends React.Component<any, any> {
  render() {
    return (
      <div className="siimple-form login-form">
        <div className="siimple-form-title">ログイン</div>
        <div className="siimple-form-field">
          <div className="siimple-form-field-label">ユーザー名</div>
          <input
            type="text"
            className="siimple-input siimple-input--fluid"
            placeholder="kiesproject"
          />
        </div>
        <div className="siimple-form-field">
          <div className="siimple-form-field-label">パスワード</div>
          <input
            type="password"
            className="siimple-input siimple-input--fluid"
            placeholder="*********"
          />
        </div>
        <div className="siimple-form-field">
          <div className="siimple-btn siimple-btn--blue">ログイン</div>
        </div>
      </div>
    );
  }
}

export default Login;
