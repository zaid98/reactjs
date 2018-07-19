import React, { Component } from 'react';
import { firebase } from '../firebase';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import Landingpage from './Landing';
import Signuppage from './Signup';
import Login from './Login';
// import Passwordforgetpage from './Passwordforget';
import Homepage from './Home';
import Accountpage from './Account';
import * as routes from '../constants/routes';
import withAuthentication from './Withauthentication';
import SignOutButton from './Signout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
         };
       }
  componentDidMount() {
          firebase.auth.onAuthStateChanged(authUser => {
            authUser
              ? this.setState(() => ({ authUser }))
              : this.setState(() => ({ authUser: null }));
          });
        }

render() {
  return(
  <Router>
    <div>
      <Navigation />

      <hr/>
      <Route exact path={routes.LANDING} component={() => <Landingpage />} />
      <Route exact path={routes.SIGN_UP} component={() => <Signuppage />} />
      <Route exact path={routes.SIGN_IN} component={() => <Login />} />
      {/* <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} /> */}
      <Route exact path={routes.HOME} component={() => <Homepage />} />
      <Route exact path={routes.ACCOUNT} component={() => <Accountpage />} />
    </div>
  </Router>
) ;}
}
export default withAuthentication(App);
