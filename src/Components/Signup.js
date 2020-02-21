import React, {Component} from 'react';
import styles from '../assets/css/Signup.module.css';
import Navbar from './Navbar';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Link} from 'react-router-dom'
class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className={styles.row + " row "}>
                        <div className={styles.column1 + " col-md-6 col-xs-12 col-sm-12 "}>
                            <p className={styles.loginpara + " align-middle "}>
                                " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua."
                            </p>
                        </div>
                        <div className={styles.column2 + " col-md-6 col-xs-12 col-sm-12 "}>

                            <div className={styles.loginlogo + " d-flex justify-content-center "}><Logo/></div>
                            <div className={styles.form + " container "}>
                                <div className={styles.logtext}>Sign up</div>
                                <div className={styles.welcome}>Create a new account</div>
                                <div className="form-group ">
                                    <label className={styles.inputtext + " inputEmail4 "}>Enter your data</label>
                                    <input
                                        type="text"
                                        className={styles.input + " form-control "}
                                        id="firstname"
                                        placeholder="First Name"/>
                                </div>
                                <div className="form-group">

                                    <input
                                        type="text"
                                        className={styles.input + " form-control "}
                                        id="lastname "
                                        placeholder="Last Name"/>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className={styles.input + " form-control "}
                                        id="inputemail"
                                        placeholder="example@gmail.com"/>
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        className={styles.input + " form-control "}
                                        id="inputPassword4"
                                        placeholder="Password"/>
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        className={styles.input + " form-control "}
                                        id="confirmPassword4"
                                        placeholder="Confirm Password"/>
                                </div>
                                <button
                                    type="submit"
                                    className={styles.logbutton + " btn btn-primary d-flex justify-content-center d-md-table mx-auto "}>Sign up</button>
                                <div>
                                    <div className={styles.cent}>
                                        <span className={styles.account}>Already have an account? &nbsp;
                                        </span>
                                        <span className={styles.signup}>
                                            <Link to="/login" className={styles.link}>
                                                Log in
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.foot}>
                                           <span className={styles.privacy}>Privacy Policy &nbsp; | &nbsp;
                                            </span>
                                            <span className={styles.term}>Term & Conditions
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Signup;