import React, { Component } from 'react';
import GoogleMap from './Google-map-api.js';
import HomeSection2 from './homeSection2.js';


import styles from '../assets/Home1.module.css';

// Images for Bidders Section

// import {ReactComponent as CVS} from '../assets/img/cvs-store-front-cyber-monday/cvs-store-front-cyber-monday.png';
import CVS from '../assets/img/cvs-store-front-cyber-monday/cvs-store-front-cyber-monday.png';
import IMG from '../assets/img/images/images.png';
import EAR from '../assets/img/загружено/загружено.png';
import WAL from '../assets/img/walgreens-pharmacy-store-retail-chain-stores-number-one-usa-40146444/walgreens-pharmacy-store-retail-chain-stores-number-one-usa-40146444.png';




class Home1 extends Component {
    render() {

        return (
            <div className="home-container">
                <div className={styles.home1}>
                    <div className={styles.first}>
                        <div className={styles.prescription}>
                            <h2 className={styles.heading}>Your prescription. <br />
                                Your terms.
                                                    </h2>
                            <p className={styles.pera}>Name your price and let pharmacies bid to<br /> earn your business on our transparent<br /> blockchain phatform.</p>
                        </div>
                        <div className={styles.map}>
                            <GoogleMap />

                        </div>


                    </div>
                    <div>
                        <HomeSection2 />

                    </div>
                </div>

                {/* Bidder Section */}

                <div className={styles.bidderSection}>
                    <div >
                        <h2 className={styles.bidderheading}>Top bidders near you</h2>
                    </div>

                    <div className={styles.container}>
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className={styles.one}>
                                    <div className={styles.cvs}>
                                        <img src={CVS} alt="CVS"></img>

                                    </div>
                                    <div className={styles.friendly}>
                                        <div>
                                            <p className={styles.p1}>Friendly Pharmacy</p>

                                        </div>
                                        <div className={styles.p2}>

                                            <p>3712-G Lawndale Drive</p>
                                            <p>Greensboro, NC 27455</p>


                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div className={styles.one}>
                                    <div className={styles.cvs}>
                                        <img src={IMG} alt="IMG"></img>

                                    </div>
                                    <div className={styles.friendly}>
                                        <div>
                                            <p className={styles.p1}>Sage</p>

                                        </div>
                                        <div className={styles.p2}>

                                            <p>2500 S Lakeline Blvd</p>
                                            <p>Cedar Park, TX 78613</p>


                                        </div>

                                    </div>
                                </div>




                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div className={styles.one}>
                                    <div className={styles.cvs}>
                                        <img src={EAR} alt="EAR"></img>

                                    </div>
                                    <div className={styles.friendly3}>
                                        <div>
                                            <p className={styles.p1}>Peoples RX</p>

                                        </div>
                                        <div className={styles.p2}>

                                            <p>13860 US-183 C</p>
                                            <p>Austin, TX 78750</p>


                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="clearfix"></div>
                        </div>

                    </div>

                    <div className={styles.container}>
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className={styles.one}>
                                    <div className={styles.cvs}>
                                        <img src={WAL} alt="WAL"></img>

                                    </div>
                                    <div className={styles.friendly}>
                                        <div>
                                            <p className={styles.p1}>ASP Cares</p>

                                        </div>
                                        <div className={styles.p2}>

                                            <p>13831 US Hwy 183 N</p>
                                            <p>Austin, TX 78750</p>


                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-4">





                            </div>

                            <div className="col-sm-12 col-md-4">

                            </div>
                            <div className="clearfix"></div>
                        </div>

                    </div>


                </div>


            </div>



        )
    }
}


export default Home1;