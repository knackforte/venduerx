import React, {Component} from 'react';
import styles from '../assets/css/Pharmacyprofile.module.css';
import Navbar from './Navbar';
import profile from '../assets/profile.png';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {Link} from 'react-router-dom'
class Pharmacyprofile extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                <span className={styles.set}>Pharmacy profile</span>
                    <div className="row">
                        <div className="col-ld-3 col-md-3 col-sm-4 col-xs-4">
                            <div className={styles.column1}>
                            <div className={styles.profilepic}>
                            <img  src={profile} height={100} width={100}/>
                            </div>
                            <div>
                                <label>Friendly pharmacy</label>
                            </div>

                            </div>

                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-8">
                            <div className={styles.column}>
                                <div className={styles.title}>Password & security</div>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <label for="currentpassword1">Current password:</label>
                                            <input
                                                type="password"
                                                name="currentpassword"
                                                class="form-control"
                                                id="currentpassword"
                                                placeholder="123456abc"></input>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <label for="newpassowrod">New password:</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                id="newpassword"
                                                name="newpassword"
                                                placeholder="65EeR"></input>
                                        </div>
                                        <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                            <label for="repeatpassord">Repeat new password:</label>
                                            <input
                                                type="password"
                                                name="repeatpassword"
                                                class="form-control"
                                                id="repeatpassword"
                                                placeholder="65WeR"></input>
                                        </div>
                                    </div>
                                     <div>
                                    <button type="button" className={styles.button + " btn btn-primary btn-lg pull-right "}>Change Password</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Pharmacyprofile;