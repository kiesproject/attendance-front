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
      <RegisterForm
        error={error}
        register={register}
        handleError={handleError}
      />
    );
  }
}

export default Root;
