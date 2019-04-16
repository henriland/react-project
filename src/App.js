import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import NotFound from './pages/notfound'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-wrapper">
			  	<Router>
			    	<div className="Menu-wrapper">
				      <ul>
				        <li>
				          <Link to="/">Home</Link>
				        </li>
				        <li>
				          <Link to="/login">Login</Link>
				        </li>
				        <li>
				          <Link to="/register">Register</Link>
				        </li>				        
				      </ul>	    	
			    	</div>
			    	<Switch>
			    	<Route exact path="/" component={Home} />
      				<Route path="/login" component={Login} />
      				<Route path="/register" component={Register} />
      				<Route component={NotFound} />
      			</Switch>
			  	</Router>
        </header>    
      </div>
    );
  }
}

export default App;