import React, {Component} from 'react';
import styles from '../assets/css/Stepfour.module.css';
import Navbar from './Navbar';
import bluepill from '../assets/bluepill.png';
import bluedollar from '../assets/bluedollar.png';
import whiteclock from '../assets/whiteclock.png';
import rightarrow from '../assets/rightarrow.png';
import leftarrow from '../assets/leftarrow.png';
import bluelocation from '../assets/bluelocation.png';
import step4pic from '../assets/step4pic.png';
class Stepfour extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div>
                        <span className={styles.set}>Create a new post</span>
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
                        <div className={styles.imagecontainerwhite}>
                            <div >
                                <img className={styles.activeImageset}  src={bluelocation}/>
                            </div>
                        </div>
                        <div className="my-auto">
                        <div className={styles.line}></div>
                        </div>
                        <div className={styles.imagecontainerwhite}>
                            <div>
                                <img className={styles.activeImage} src={bluedollar}/>
                            </div>
                        </div>
                        <div className="my-auto">
                        <div className={styles.line}></div>
                        </div>
                        <div className={styles.imagecontainer}>
                            <div>
                                <img className={styles.activeImage} src={whiteclock}/>
                            </div>
                            <div className= " row ">
                        <div className={styles.lables}>
                        Time
                        </div>
                        </div>
                        </div>
                        <div className="my-auto">
                        <div className={styles.greyline}></div>
                        </div>
                        <div className={styles.imagecontainerwhite1}></div>
                    </div>
                    </div>
                    
                    <div className={"container "+styles.contentArea}>
                        <div className={styles.rowdesign + " row "}>
                            <div className="col-md-6">
                                <div className={styles.label1}>
                                    <div>Set the timer</div>
                                    <form>
                                        <div className="form-row">
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="text">Set the bidding time here:</label>
                                                <input
                                                    type="time"
                                                    class="form-control"
                                                    id="bidtime"
                                                    name="bidtime"
                                                    data-toggle="tooltip" 
                                                    data-placement="right" 
                                                    title="Set the amount of time you want auction to last."
                                                    ></input>
                                            </div>
                                        </div>
                                        <div className={styles.btnsDiv}>
                                        <button
                                                type="button"
                                                className={styles.button1 + " btn btn-primary btn-lg  "}>
                                                <span className={styles.arrow}>
                                                    <img className={styles.arrowsize} src={leftarrow}/>
                                                </span>
                                                <span className={styles.prevBtnText}>&nbsp;Previous Step</span>
                                            </button>
                                            <button
                                                type="button"
                                                className={styles.button + " btn btn-primary btn-lg "}>Submit &nbsp;
                                                <span>
                                                    <img  className={styles.arrowsize} src={rightarrow}/>
                                                </span>
                                            </button>
                                           
                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div ></div>
                            <div className="col-md-6">
                                <img  className={styles.activeImage} src={step4pic} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stepfour;