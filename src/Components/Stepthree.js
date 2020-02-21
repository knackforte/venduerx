import React, {Component} from 'react';
import styles from '../assets/css/Stepthree.module.css';
import Navbar from './Navbar';
import bluepill from '../assets/bluepill.png';
import whitedollar from '../assets/whitedollar.png';
import rightarrow from '../assets/rightarrow.png';
import leftarrow from '../assets/leftarrow.png';
import bluelocation from '../assets/bluelocation.png';
import step3pic from '../assets/step3pic.png';
class Stepthree extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div>
                        <span className={styles.set}>Create anew post</span>
                    </div>
                    <div className="container">
                        <div className={styles.rowstyle + " row justify-content-center"}>
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
                                    <img className={styles.activeImageset} src={bluelocation}/>
                                </div>
                            </div>
                            <div className="my-auto">
                                <div className={styles.line}></div>
                            </div>
                            <div className={styles.imagecontainer}>
                                <div>
                                    <img className={styles.activeImage} src={whitedollar}/>
                                </div>
                                <div className=" row ">
                                    <div className={styles.lables}>
                                        Price
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
                        </div>
                    </div>

                    <div className={"container " + styles.contentArea}>
                        <div className={styles.rowdesign + " row "}>
                            <div className="col-md-6">
                                <div className={styles.label1}>
                                    <div>How much do you want to pay?</div>
                                    <form>
                                        <div className="form-row">
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="text">Enter price</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="price"
                                                    name="price"
                                                    placeholder="$230"
                                                    data-toggle="tooltip"
                                                    data-placement="right"
                                                    title="Pharmacies will see your posting price and be able to place offers to help you get the best price."></input>
                                            </div>
                                        </div>
                                        <div className={styles.fairlabel}>
                                            Fair market value:$23
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
                            <div className="col-md-6">
                                <img className={styles.activeImage} src={step3pic}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stepthree;