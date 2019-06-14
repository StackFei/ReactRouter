import React,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import Profile from './Components/Profile'
class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (<Router>
	    		<div>
	    			<Route exact path="/home" component={Home} />
	    			<Route path="/user" component={User} />
	    			<Route path="/profile" component={Profile} />
	    		</div>
    		</Router>);
  }
}

export default App;
