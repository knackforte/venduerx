import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';



// // import './index.css';
// import CustomeRoutes from './Components/Routes.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/jquery/dist/jquery.js'
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
//   } from "react-router-dom";
// import Pharmacysetting from './Components/Pharmacysetting';
// import Stepone from './Components/Stepone';
// import Steptwo from './Components/Steptwo';
// import Stepthree from './Components/Stepthree';
// import Stepfour from './Components/Stepfour';
// import Stepfive from './Components/Stepfive';
// import Pharmacyprofile from './Components/Pharmacyprofile';
// Temp
// import Login from './Components/Login.js';
// import LoginDemo from './Components/logindemo';

// import Home1 from './Components/Home1';
// import Navbar from './Components/Navbar';
// import Signup from './Components/Signup';
// const CustomeRoutes =()=>(
//     <Router>
//         <div>
//         {/* <Route exact path='/' component={App}/> */}
//         <Route  path='/' component={Login}/> 
//         <Route path='/signup' component={Signup}/> 
//         </div>
        
//     </Router>
// )



ReactDOM.render(<App/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
