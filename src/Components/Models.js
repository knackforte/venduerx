import React, {Component} from 'react';

import styles from '../assets/css/Model.module.css';

class modals extends Component {
    render()
    {
        return (
            <div>

                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#myModal">
                    Open modal
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className={styles.modalcontent + " modal-content"}>

                            {/* <div className="modal-body"> */}

                            <div className= {styles.record + " row"} >
                                 

                                    <div className="col-lg-3">
                                        <div>
                                            <div className={styles.bluetxt}>RiteAid</div>
                                            <div className={styles.greytxt}>223W 231st Street</div>
                                            <div className={styles.greytxt}>Bronx NY 10463</div>

                                        </div>

                                    </div>
                                    <div className="col-lg-9">

                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                        <div className={styles.rowmargin + " row "}>
                                            <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                    <div className={styles.greytxt}>Bid</div>
                                                    <div className={styles.rating}>$25</div>
                                                </div>

                                            </div>
                                            <div className={styles.lineDiv}>
                                                {/* <div className={styles.vLine}></div> */}
                                            </div>
                                            <div className={"col-lg-2 col-md-3 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                    <div className={styles.greytxt}>Rating
                                                    </div>
                                                    <div className={styles.rating}>4.5</div>

                                                </div>

                                            </div>
                                            <div className={styles.lineDiv}>
                                                {/* <div className={styles.vLine}></div> */}
                                            </div>
                                            <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                    <div className={styles.greytxt}>Distance</div>
                                                    <div className={styles.rating}>3 miles</div>

                                                </div>

                                            </div>
                                            <div className={styles.lineDiv}>
                                                {/* <div className={styles.vLine}></div> */}
                                            </div>
                                            <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>

                                                <div className={styles.section}>
                                                    <div className={styles.greytxt}>Delivery</div>
                                                    <div className={styles.rating}>pickup</div>

                                                </div>

                                            </div>
                                        </div>
                                        {/* </div> */}

                                    </div>

                                 

                            </div>
                            {/* </div> */}

                            <div className={styles.whitebox}>
                                <div>
                                    <span className={styles.heading}>You made a deal!</span>
                                </div>
                                <div>
                                    <span className={styles.discription}>This posting will now appear in in the closed deals tab.</span>
                                </div>
                                <div className={styles.btnDiv}>
                                    <div>
                                        <button className={styles.btn}>
                                            <span className={styles.btntxt}>Go Back</span>
                                        </button>
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

export default modals;