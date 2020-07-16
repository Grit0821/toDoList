import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Index from './component/Index/'
import Login from './component/Login'
import SignUp from './component/SignUp/'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
    )
  }
}

export default App;

