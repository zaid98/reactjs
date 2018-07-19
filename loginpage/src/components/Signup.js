import React , {Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {
  Link,
  withRouter,
} from 'react-router-dom';
import * as routes from '../constants/routes';
import { auth, db } from '../firebase';
// history
const SignUpPage = ({  }) =>
  <div>
    <h1>SignUp</h1>
    <Signupform  />
    {/* history={history} */}
  </div>
  const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };
  const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
  });

class Signupform extends React.Component {
  constructor(props) {
    super(props);

    this.state ={...INITIAL_STATE};
    // const history= {history};
}


  handleSubmit = event => {
    const {
      email,
      password,
    } = this.state;
    // const {
    //       history,
    //     } = this.props;
    auth.doCreateUserWithEmailAndPassword(email, password)  // Create a user in your own accessible Firebase Database too
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            // history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });

      })


      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
}
validateForm() {
  return this.state.email.length > 0 && this.state.password.length > 0;
}

handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  });
}

 render(){

    const {
      email,
      password,
      error
    } = this.state;
return(
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
         Signup
       </Button>
       { error && <p>{error.message}</p>}
     </form>
   </div>
 );
}

}
// const Signuppage = () =>
//   <div>
//     <h1>Sign up Page</h1>
//   </div>
const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);


 export {
  Signupform,
  SignUpLink,
};
