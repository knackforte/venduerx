import React, {Component} from 'react';
import styles from '../assets/css/Pharmacysetting.module.css';
import Navbar from './Navbar';
class Pharmacysetting extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <span className={styles.set}>Settings</span>
                    <div className="row">

                        <div className=" col-md-6 col-sm-12 col-xs-12">
                            <div className={styles.column}>
                                <div className={styles.title}>Your Profile
                                </div>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                            <label htmlFor="text">Store Name:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="pharmacy"
                                                name="pharmacy"
                                                placeholder="Friendly Pharmacy"></input>
                                        </div>
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                            <label htmlFor="staff">Staff Name:</label>
                                            <input
                                                type="text"
                                                name="staffname"
                                                class="form-control"
                                                id="staffname"
                                                placeholder="Tony"></input>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                            <label htmlFor="inputEmail4">E-mail:</label>
                                            <input
                                                type="email"
                                                name="inputemail"
                                                class="form-control"
                                                id="inputemail"
                                                placeholder="example.gmail.com"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="inputAddress">Street Address:</label>
                                        <input
                                            type="text"
                                            name="inputaddress"
                                            class="form-control"
                                            id="inputAddress"
                                            placeholder="1234 Main St"/>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label htmlFor="text">State:</label>
                                            <input type="text" name="state" class="form-control" id="state"></input>
                                        </div>
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label fohtmlForr="staff">City:</label>
                                            <input type="text" name="cityname" class="form-control" id="cityname"></input>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <label htmlFor="text">Zip Code:</label>
                                            <input type="text" name="zipcode" class="form-control" id="zipcode"></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="inputAddress">About us:</label>
                                        <input
                                            type="text"
                                            name="aboutus"
                                            className={styles.about + " form-control "}
                                            id="aboutus"/>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="staffexperties">Staff Expertise:</label>
                                        <input
                                            type="text"
                                            name="staffexperties"
                                            className={styles.experties + " form-control "}
                                            id="staffexperties"/>
                                    </div>
                                    <div>
                                        <button type="button" className={styles.button + " btn btn-primary btn-lg pull-right "}>Apply</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                        <div className=" col-md-6 col-sm-12 col-xs-12">
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
export default Pharmacysetting;