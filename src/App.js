import React, { Component } from 'react';
import './App.css';
import { Router, Route } from "react-router-dom";
import history from './config/history'
import Home from './component/Home'
import Login from './component/Login'
import SignUp from './component/SignUp'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </div>
      </Router>
    )
  }
}

export default App;

