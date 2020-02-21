import React, {Component} from 'react';
import styles from '../assets/css/Login.module.css';
import Navbar from './Navbar';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Icon} from '@opuscapita/react-icons';
import {Link} from 'react-router-dom'
import signup from '../Components/Signup.js';
class Login extends Component {
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
                                <div className={styles.logtext}>Log in</div>
                                <div className={styles.welcome}>Welcome</div>
                                <div className="form-group ">
                                    <label className={styles.inputtext + " inputEmail4 "}>Enter your data</label>
                                    <input
                                        type="email"
                                        className={styles.input + " form-control "}
                                        id="inputEmail4"
                                        placeholder="example@gmail.com"/>
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        className={styles.input + " form-control "}
                                        id="inputPassword4"
                                        placeholder="Password"/>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <span className={styles.pass + " form-text "}>
                                            Unsecure Password
                                        </span>
                                    </div>
                                    <div className="col">
                                        <span className={styles.forget + " form-text "}>Forget Password</span>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className={styles.logbutton + " btn btn-primary d-flex justify-content-center d-md-table mx-auto "}>Sign in</button>
                                <div>
                                    <div className={styles.cent}>
                                        <span className={styles.account}>Don't have an account? &nbsp;
                                        </span>
                                        <span className={styles.signup}>
                                            <Link to="/signup" className={styles.link}>
                                                Sign up
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.foot}>
                                        <span className={styles.iconDiv}>
                                            <span className={styles.icontext}>Ease of Use
                                            </span>
                                            <Icon className={styles.icon} type="indicator" name="search"/>
                                        </span>
                                        <span className={styles.iconDiv}>
                                            <span className={styles.contact}>Contact Support
                                            </span>
                                            <Icon className={styles.icon} type="indicator" name="settings"/>
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

export default Login;