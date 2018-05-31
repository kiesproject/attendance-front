import * as React from 'react';
import { Redirect } from 'react-router-dom';

import RegisterForm from '../RegisterForm';

import Account from '../../models/Account';
import Error from '../../models/Error';

interface RegisterProperties {
  account: Account;
  error: Error;
  register(name: string, password: string): void;
  handleError(isError: boolean, message: string): void;
}

class Root extends React.Component<RegisterProperties, any> {
  render() {
    const { account, error, register, handleError } = this.props;
    return account.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <div className="root">
        <div className="root-inner">
          <div className="welcome-title">
            <div className="siimple-jumbotron-title siimple--color-white">
              ようこそXXXXXへ︎
            </div>
            <div className="siimple-jumbotron-detail siimple--color-white">
              登録はこのページのフォームから！ログインは右上のボタンから！
            </div>
          </div>
          <div className="welcome-form">
            <RegisterForm
              error={error}
              register={register}
              handleError={handleError}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Root;
