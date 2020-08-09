import React, { Component } from 'react';
import './App.css';
import { Router, Route } from "react-router-dom";
import history from './config/history'
import Index from './component/Index'
import Login from './component/Login'
import SignUp from './component/SignUp'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;

