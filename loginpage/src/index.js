import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();
class App extends React.Component {
  render() {
    return (
              <h1> </h1>

                );


          }
          }
ReactDOM.render(<App/> , document.getElementById('root'));
ReactDOM.render(<Login/>,document.getElementById('login'));
ReactDOM.render(<Signup/>,document.getElementById('signup'));
