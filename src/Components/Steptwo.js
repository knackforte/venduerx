import React, {Component} from 'react';
import styles from '../assets/css/Steptwo.module.css';
import Navbar from './Navbar';
import bluepill from '../assets/bluepill.png';
import rightarrow from '../assets/rightarrow.png';
import whitelocation from '../assets/whitelocation.png';
import leftarrow from '../assets/leftarrow.png';
import step2pic from '../assets/step2pic.png';
import {Link} from 'react-router-dom'
class Steptwo extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div>
                        <span className={styles.set}>Create anew post</span>
                    </div>
                    <div className="container">
                        <div className={styles.rowstyle + " row justify-content-center "}>
                            <div className={styles.imagecontainerwhite}>
                                <div >
                                    <img className={styles.activeImage} src={bluepill}/>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.imagecontainer}>
                               
                                <div >
                                    <img className={styles.activeImageset} src={whitelocation}/>
                                </div>
                                <div className="row">
                                        <div className={styles.lables}>
                                        Location
                                        </div>
                                    </div>
                            </div>
                            <div className="my-auto">
                                <div className={styles.greyline}></div>
                            </div>
                            <div className={styles.imagecontainerwhite1}></div>
                            <div className="my-auto">
                                <div className={styles.greyline}></div>
                            </div>
                            <div className={styles.imagecontainerwhite1}></div>
                            <div className="my-auto">
                                <div className={styles.greyline}></div>
                            </div>
                            <div className={styles.imagecontainerwhite1}></div>
                        </div>
                    </div>
                  
                    <div className={"container " + styles.contentArea}>
                        <div className={styles.rowdesign + " row "}>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className={styles.label1}>
                                    <div>Select location & fulfillment method</div>
                                    <form>
                                        <div className="form-row">
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="text">City:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="city"
                                                    name="city"
                                                    placeholder="Housetwon"></input>
                                            </div>
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="quantity">Delivery option:</label>
                                                <select className="form-control" id="deliveryoption">
                                                    <option>-select-</option>
                                                    <option>I will pickup</option>
                                                    <option>Deliver to me</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={styles.btnsDiv}>
                                            <button type="button" className={styles.button1 + " btn btn-primary btn-lg "}>
                                                <span className={styles.arrow}>
                                                    <img className={styles.arrowsize} src={leftarrow}/>
                                                </span>
                                                <span className={styles.prevBtnText}>&nbsp;Previous Step</span>
                                            </button>
                                            <button type="button" className={styles.button + " btn btn-primary btn-lg "}>Next Step &nbsp;
                                                <span>
                                                    <img className={styles.arrowsize} src={rightarrow}/>
                                                </span>
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div ></div>
                            <div className="col-md-6">
                                <img className={styles.activeImage} src={step2pic}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Steptwo;