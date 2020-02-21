import React, {Component} from 'react';
import styles from '../assets/css/Stepone.module.css';
import Navbar from './Navbar';
import whitepill from '../assets/whitepill.png';
import rightarrow from '../assets/rightarrow.png';
import step1pic from '../assets/step1pic.png';

class Stepone extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div>
                        <span className={styles.set}>Create a new post</span>
                    </div>
                    <div className="container">
                        <div className={styles.rowstyle + " row justify-content-center"}>
                            <div className={styles.imagecontainer}>
                                <div >
                                    < img className={styles.activeImage} src={whitepill}/>
                                    <div className="row">
                                        <div className={styles.lables}>
                                            Drug Name & Quantity
                                        </div>
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
                            <div className="my-auto">
                                <div className={styles.greyline}></div>
                            </div>
                            <div className={styles.imagecontainerwhite1}></div>
                        </div>
                    </div>

                    <div className={"container " + styles.contentArea}>
                        <div className={styles.rowdesign + " row "}>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                                <div className={styles.label1}>
                                    <div>Select your drug and quantity</div>
                                    <form>
                                        <div className="form-row">
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="text">Enter drug Name:</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="drugname"
                                                    name="drugname"
                                                    placeholder="Atovasterin 20 mg tablet"></input>
                                            </div>
                                            <div class="form-group col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                                                <label for="quantity">Enter Quantity:</label>
                                                <input
                                                    type="number"
                                                    name="drugquantity"
                                                    class="form-control"
                                                    id="drugquantity"
                                                    placeholder="20"></input>
                                            </div>
                                        </div>
                                        <div className={styles.btnsDiv}>
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
                            < div className="col-md-6">
                                <img className={styles.activeImage} src={step1pic}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stepone;