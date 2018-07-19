import React from 'react';
import withAuthorization from './Withauthorization';
import AuthUserContext from './Authusercontext';
// import { PasswordForgetForm } from './PasswordForget';
// import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        {/* <PasswordForgetForm />
        <PasswordChangeForm /> */}
      </div>
    }
  </AuthUserContext.Consumer>

  const authCondition = (authUser) => !!authUser;

  export default withAuthorization(authCondition)(AccountPage);
