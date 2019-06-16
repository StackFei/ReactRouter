import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import Profile from './Components/Profile'
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<Router>
      <div>
        <div>
          <Link to="/home">首页</Link>|
          <Link to="/user">用户</Link>|
          <Link to="/profile">个人中心</Link>
        </div>
        <div>
          <Route exact path="/home" component={Home} />
          <Route path="/home/123" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </Router>);
  }
}

export default App;
