
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import App from '../App.js';
import Login from '../Components/Login.js';
import Signup from '../Components/Signup.js';
const CustomeRoutes =()=>(
    <Router>
        <div>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/> 
        <Route path='/signup' component={Signup}/> 
        {/* <Route  path='/app' component={App}/> */}

      
        </div>
        
    </Router>
)

export default CustomeRoutes;