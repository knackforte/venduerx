import React, {Component} from 'react';
// import styles from '../assets/css/CustomerSetting.module.css';

import styles from '../assets/css/Pharmacysetting.module.css';

import Navbar from '../Components/Navbar.js';

 class Setting extends Component{
     render()
     {
         return (
            <div className={styles.outercontainer}>
                 

            <div className="container">
                <span className={styles.set}>Settings</span>
                <div className="row">

                    <div className=" col-md-6 col-sm-12 col-xs-12">
                        <div className={styles.column}>
                            <div className={styles.title}>Your profile<span className={styles.subheading}>(Only your zipcode information will be shared in postings)</span>
                            </div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                        <label className={styles.label} htmlFor="text">First Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pharmacy"
                                            name="pharmacy"
                                            placeholder="Robert"></input>
                                    </div>
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                        <label className={styles.label} htmlFor="staff">Last Name:</label>
                                        <input
                                            type="text"
                                            name="staffname"
                                            className="form-control"
                                            id="staffname"
                                            placeholder="Manion"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                        <label className={styles.label} htmlFor="inputEmail4">E-mail:</label>
                                        <input
                                            type="email"
                                            name="inputemail"
                                            className="form-control"
                                            id="inputemail"
                                            placeholder="example.gmail.com"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className={styles.label} htmlFor="inputAddress">Street Address:</label>
                                    <input
                                        type="text"
                                        name="inputaddress"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"/>
                                </div>

                                <div className="form-row">
                                    
                                        <div className="form-group col-md-3">
                                            <label className={styles.label} for="inputState">State</label>
                                            <input
                                        type="text"
                                        name="inputaddress"
                                        className="form-control"
                                        id="inputAddress"
                                         />
                                             
                                        </div>
                                        <div className="form-group col-md-3">
                                            <label className={styles.label} for="inputZip">Zip</label>
                                            <input type="text" className="form-control" id="inputZip"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                        <label className={styles.label} for="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity"/></div>

                                        <div>

                                        </div>

                                        
                                           
                                        </div>
                                        <div className={styles.buttonDiv}>
                                             
                                            <button  className={styles.button + " btn btn-primary btn-lg pull-right "}> Save </button>
                                              
                                        </div>

                                    </form>

                                </div>
                            </div>
                            <div className=" col-md-6 col-sm-12 col-xs-12">
                                <div className={styles.column}>
                                    <div className={styles.title}>Password</div>
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <label className={styles.label} for="currentpassword1">Current password:</label>
                                                <input
                                                    type="password"
                                                    name="currentpassword"
                                                    className="form-control"
                                                    id="currentpassword"
                                                    placeholder="123456abc"></input>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <label className={styles.label} for="newpassowrod">New password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="newpassword"
                                                    name="newpassword"
                                                    placeholder="65EeR"></input>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                                <label className={styles.label} for="repeatpassord">Repeat new password:</label>
                                                <input
                                                    type="password"
                                                    name="repeatpassword"
                                                    className="form-control"
                                                    id="repeatpassword"
                                                    placeholder="65WeR"></input>
                                            </div>
                                        </div>
                                        <div className={styles.buttonDiv}>
                                            <button
                                                type="button"
                                                className={styles.button + " btn btn-primary btn-lg pull-right "}> Change Password</button>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
         )
     }
 }

 export default Setting;