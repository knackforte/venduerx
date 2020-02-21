import React, {Component} from 'react';
import styles from '../assets/css/Stepfive.module.css';
import Navbar from './Navbar';
import bluepill from '../assets/bluepill.png';
import bluedollar from '../assets/bluedollar.png';
import blueclock from '../assets/blueclock.png';
import whiteclock from '../assets/whiteclock.png';
import whitereview from '../assets/whitereview.png';
import rightarrow from '../assets/rightarrow.png';
import leftarrow from '../assets/leftarrow.png';
import bluelocation from '../assets/bluelocation.png';
import step5pic from '../assets/step5pic.png';

class Stepfive extends Component {   
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       windowWidth: 0,
    //       windowHeight: 0
    //     };
    //     this.updateDimensions = this.updateDimensions.bind(this);
    //   }
    // componentDidMount() {
    //     this.updateDimensions();
    //     window.addEventListener("resize", this.updateDimensions);
    //   }
    
    //   componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions);
    //   }
    
    //   updateDimensions() {
    //     let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    //     let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    //     console.log(windowWidth);
    //     this.setState({ windowWidth, windowHeight });
    //   }
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
                        <div className={styles.imagecontainerwhite}>
                            <div >
                                <img  className={styles.activeImage} src={bluepill}/>
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
                        <div className={styles.imagecontainerwhite}>
                            <div >
                                <img className={styles.activeImage} src={bluedollar}/>
                            </div>
                        </div>
                        <div className="my-auto">
                        <div className={styles.line}></div> </div>
                        <div className={styles.imagecontainerwhite}>
                            <div >
                                <img className={styles.activeImage} src={blueclock}/>
                            </div>
                        </div>
                        <div className="my-auto">
                        <div className={styles.line}></div> </div>
                        <div className={styles.imagecontainer}>
                            <div >
                                <img className={styles.activeImagereview} src={whitereview}/>
                            </div>
                            <div className=" row ">
                        <div className={styles.lables}>
                            Review & edit
                        </div>
                    </div>
                        </div>
                    </div>
                    </div>
       
                    
                    <div className={"container " + styles.contentArea}>
                        <div className={styles.rowdesign + " row "}>
                            <div className="col-md-6">
                                <div className={styles.label1}>
                                    <div>Review & Submit</div>
                                    <div className={styles.textlabel}>
                                        I selected 30 tablets of Atrovastatin 20mg &nbsp; &nbsp;
                                        <span className={styles.editlabel}>
                                            edit
                                        </span>
                                    </div>
                                    <div className={styles.textlabel1}>
                                        I`m located in Houston and want to pick up my medicine &nbsp; &nbsp;
                                        <span className={styles.editlabel}>
                                            edit
                                        </span>
                                    </div>
                                    <div className={styles.textlabel1}>
                                        I want to pay $230 and let phaemacies bid for 2 days &nbsp; &nbsp;
                                        <span className={styles.editlabel}>
                                            edit
                                        </span>
                                    </div>
                                    <div className={styles.btnsDiv}>
                                        <button type="button" className={styles.button1 + " btn btn-primary btn-lg "}>
                                            <span className={styles.arrow}>
                                                <img className={styles.arrowsize} src={leftarrow}/>
                                            </span>
                                            <span className={styles.prevBtnText}>&nbsp;Previous Step</span>
                                        </button>
                                        <button
                                            type="button"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                            className={styles.button + " btn btn-primary btn-lg "}>Post a listing
                                        </button>
                                        <div
                                            class="modal fade"
                                            id="exampleModalCenter"
                                            tabindex="-1"
                                            role="dialog"
                                            aria-labelledby="exampleModalCenterTitle"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Succes!</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        You named your price! Pharmacies will now see your post and make offers.
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div ></div>
                            <div className="col-md-6">
                            <img className={styles.activeImage } src={step5pic} />

                                {/* <img src={step5pic} height={380} width={480}/> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
export default Stepfive;