import React, {Component} from 'react';

import styles from '../assets/css/Postview.module.css';
//  import Clock from '../assets/img/whiteclock.png';

// import styles2 from '../assets/css/Manageoffers.module.css';

import whiteclock from '../assets/whiteclock.png';

// import Clock from '../assets/css/whiteclock.png';

class Postview extends Component {
    render()
    {
        return (
            <div className={styles.outerContainer}>
                
                <div className="container">
                <div className={styles.heading}>Summary</div>
                    <div className={styles.firstContainer}>
                    <div className="row">
                        <div className={styles.blueBox + " col-md-2 col-lg-2 col-sm-2"}>
                            <div className={styles.timeleft}>
                                <div>Time left</div>
                            </div>
                            <div className={styles.time}>2d 11h 21m</div>
                            <div className={styles.clock}>
                            <div className={styles.analog}> <img src={whiteclock} alt="Clock"></img></div>
                            </div>
                            

                        </div>

                        <div className={styles.whiteBox + " col-md-10 col-lg-10 col-sm-10"}>
                            <div className={styles.postid}>
                                <div className={styles.greytxt}>Post ID: 3849393</div>
                            </div>
                            <div className={styles.fenofibrate}>Fenofibrate 54mg</div>
                            <div className={styles.fenofibrate}>60 capsules</div>
                            <div className={styles.fenofibrate}>delivery or pickup
                            </div>

                            <div className={styles.greytxt}>223W 231st Street</div>
                            <div className={styles.greytxt}>Bronx NY 10463</div>
                            <div className="row">
                                <div className="col-md-4 col-xs-5 ">
                                    <div className={styles.greytxt}>I want to pay:<span className={styles.bidprice}>$25</span>
                                    </div>

                                </div>
                                <div className="col-md-8 col-xs-7 ">
                                    <div className={styles.btnDiv}>
                                        <div >
                                            <button className={styles.btn}>
                                                <span className={styles.btntxt}>Go Back</span>
                                            </button>
                                            <button className={styles.btn}>
                                                <span className={styles.btntxt}>My dashboard</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    </div>
                    
                    
            

                    <div className={styles.heading}>Pharmacies that bid:</div>
                    <div className={styles.secondContainer + " row "}>
                        <div className={ styles.record+ " row"}>
                            <div className="col-md-3">
                                <div>
                                    <div className={styles.bluetxt}>RiteAid</div>
                                    <div className={styles.greytxt}>223W 231st Street</div>
                                    <div className={styles.greytxt}>Bronx NY 10463</div>

                                </div>

                            </div>
                            <div className="col-md-5">
    
                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                            <div className={styles.rowmargin + " row "}>
                                                <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                <div className={styles.greytxt}>Bid</div>
                                            <div className={styles.bidprice}>$25</div>
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

                            <div className="col-md-4">
                                <div className={styles.buttonDiv}>
                                    <div>
                                         
                                        <button className={styles.btn1}>
                                            <span className={styles.btn1txt}>Counter offer</span>
                                        </button>
                                         

                                         
                                        <button className={styles.btn2}>
                                            <span className={styles.btn2txt}>Accept</span>
                                        </button>

                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={ styles.record+ " row"}>
                            <div className="col-md-3">
                                <div>
                                    <div className={styles.bluetxt}>RiteAid</div>
                                    <div className={styles.greytxt}>223W 231st Street</div>
                                    <div className={styles.greytxt}>Bronx NY 10463</div>

                                </div>

                            </div>
                            <div className="col-md-5">
    
                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                            <div className={styles.rowmargin + " row "}>
                                                <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                <div className={styles.greytxt}>Bid</div>
                                            <div className={styles.bidprice}>$25</div>
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

                            <div className="col-md-4">
                                <div className={styles.buttonDiv}>
                                    <div>
                                         
                                        <button className={styles.btn1}>
                                            <span className={styles.btn1txt}>Counter offer</span>
                                        </button>
                                         

                                         
                                        <button className={styles.btn2}>
                                            <span className={styles.btn2txt}>Accept</span>
                                        </button>

                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={ styles.record+ " row"}>
                            <div className="col-md-3">
                                <div>
                                    <div className={styles.bluetxt}>RiteAid</div>
                                    <div className={styles.greytxt}>223W 231st Street</div>
                                    <div className={styles.greytxt}>Bronx NY 10463</div>

                                </div>

                            </div>
                            <div className="col-md-5">
    
                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                            <div className={styles.rowmargin + " row "}>
                                                <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                <div className={styles.greytxt}>Bid</div>
                                            <div className={styles.bidprice}>$25</div>
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

                            <div className="col-md-4">
                                <div className={styles.buttonDiv}>
                                    <div>
                                         
                                        <button className={styles.btn1}>
                                            <span className={styles.btn1txt}>Counter offer</span>
                                        </button>
                                         

                                         
                                        <button className={styles.btn2}>
                                            <span className={styles.btn2txt}>Accept</span>
                                        </button>

                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={ styles.record+ " row"}>
                            <div className="col-md-3">
                                <div>
                                    <div className={styles.bluetxt}>RiteAid</div>
                                    <div className={styles.greytxt}>223W 231st Street</div>
                                    <div className={styles.greytxt}>Bronx NY 10463</div>

                                </div>

                            </div>
                            <div className="col-md-5">
    
                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                            <div className={styles.rowmargin + " row "}>
                                                <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                <div className={styles.greytxt}>Bid</div>
                                            <div className={styles.bidprice}>$25</div>
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

                            <div className="col-md-4">
                                <div className={styles.buttonDiv}>
                                    <div>
                                         
                                        <button className={styles.btn1}>
                                            <span className={styles.btn1txt}>Counter offer</span>
                                        </button>
                                         

                                         
                                        <button className={styles.btn2}>
                                            <span className={styles.btn2txt}>Accept</span>
                                        </button>

                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={ styles.record+ " row"}>
                            <div className="col-md-3">
                                <div>
                                    <div className={styles.bluetxt}>RiteAid</div>
                                    <div className={styles.greytxt}>223W 231st Street</div>
                                    <div className={styles.greytxt}>Bronx NY 10463</div>

                                </div>

                            </div>
                            <div className="col-md-5">
    
                                        {/* <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}> */}
                                            <div className={styles.rowmargin + " row "}>
                                                <div className={"col-lg-3 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                                <div className={styles.section}>
                                                <div className={styles.greytxt}>Bid</div>
                                            <div className={styles.bidprice}>$25</div>
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

                            <div className="col-md-4">
                                <div className={styles.buttonDiv}>
                                    <div>
                                         
                                        <button className={styles.btn1}>
                                            <span className={styles.btn1txt}>Counter offer</span>
                                        </button>
                                         

                                         
                                        <button className={styles.btn2}>
                                            <span className={styles.btn2txt}>Accept</span>
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

export default Postview;