import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Redirect, Switch } from './react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import Profile from './Components/Profile'
import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<Router>
      <div>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-heading">
              <div className="navbar-brand">React Router</div>
            </div>
            <div className="nav navbar-nav">
              <li><Link to="/home">首页</Link></li>
              <li><Link to="/user">用户</Link></li>
              <li><Link to="/profile">个人中心</Link></li>
            </div>
          </div>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/home/123" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    </Router>);
  }
}

export default App;
