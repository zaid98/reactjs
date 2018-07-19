import React, {Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link,withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { SignUpLink } from './Signup';
const Login = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <Signinform history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


export class Signinform extends React.Component{
  constructor(props)
   {
    super(props);
    this.state = { ...INITIAL_STATE };
  }


  validateForm()
  {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    const {
     email,
     password,
   } = this.state;


   const {
     history,
   } = this.props;

   auth.doSignInWithEmailAndPassword(email, password)
     .then(() => {
       this.setState(() => ({ ...INITIAL_STATE }));
       history.push(routes.HOME);
     })
     .catch(error => {
       this.setState(byPropKey('error', error));
     });

    event.preventDefault();
  }

  render() {
    const {
    email,
    password,
    error,
  } = this.state;

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
//
// export {
//   Signinform
// };
