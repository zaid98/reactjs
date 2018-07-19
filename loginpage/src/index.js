import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Landingpage from './components/Landing';
import './index.css';

import App from './components/App';
// import {Login} from './components/Login';
import {Signuppage} from './components/Signup';
// import {Accountpage} from './components/Account'
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
 ReactDOM.render(<App/> , document.getElementById('root'));
// ReactDOM.render(<Login/>,document.getElementById('login'));
// ReactDOM.render(<Signuppage/>,document.getElementById('signup'));
