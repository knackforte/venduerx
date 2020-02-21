import React, {Component} from 'react';


//import logo from './logo.svg'; import './App.css';
// import Navbar from './Components/Navbar';
// import Home1 from './Components/Home1';
// import Footer from './Components/Footer';
 import Login from './Components/Login';
 import Signup from './Components/Signup';
 import Pharmacysetting from './Components/Pharmacysetting';
 import Stepone from './Components/Stepone';
 import Steptwo from './Components/Steptwo';
 import Stepthree from './Components/Stepthree';
 import Stepfour from './Components/Stepfour';
 import Stepfive from './Components/Stepfive';
import Pharmacyprofile from './Components/Pharmacyprofile';
//import Manageoffers from './Components/Manageoffers';
//import Postview from './container/postview/Postview.js';
import Profile from './Components/Profile.js';

// import Navbar from './Components/TempNavbar.js';
import CustomerSetting from './Components/CustomerSetting.js';


class App extends Component {
    render()
    {
        return (
            <>
                 {/* <Navbar/> */}
                 {/* <Footer/> */}
                 {/* <Home1/> */}
                 {/* <Manageoffers/> */}
                  {/* <Stepone/> */}
                 {/* <Steptwo/> */}
                 {/* <Stepthree/> */}
                 {/* <Stepfour/> */}
                 {/* <Stepfive/> */}
                 {/* <Login/> */}
                 {/* <Signup/> */}
                 {/* <Pharmacysetting/> */}
                {/* <Pharmacyprofile/>  */}
                {/* <Profile/> */}
                <CustomerSetting/>
                </>
        )

    }

}

export default App;
