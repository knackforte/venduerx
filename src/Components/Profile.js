import React, {Component} from 'react';
import Navbar from './Navbar';
import styles from '../assets/css/Profile.module.css';

class Profile extends Component {

    render() {
        return (
            <div className={styles.container}>
                <Navbar/>
                <div className="container">

                    <div className={styles.rowone + " row"}>
                        <div className={styles.profile + " col-md-3 col-sm-12"}>
                            <div className={styles.heading}>Pharmacy profile</div>
                            <div className={styles.profilebox}>
                                <div className={styles.pic}>
                                    <div className={styles.picbox}>
                                        <span className={styles.profilePic}></span>
                                    </div>
                                    <div className={styles.fp}>
                                        <span>Friendly pharmacy</span>
                                        <span className={styles.dot}></span>
                                    </div>
                                    <div className={styles.htx}>
                                        <span>123 Texas Road</span>
                                    </div>
                                    <div className={styles.htx}>
                                        <span>Houston, TX</span>
                                    </div>

                                </div>
                                <div className={styles.info}>

                                    <div className={"row " + styles.profileSummaryDiv}>
                                        <div className="col col-lg-8">
                                            <span className={styles.name}>Rating:
                                            </span>

                                        </div>
                                        <div className="col col-lg-4">
                                            <span className={styles.ratingnumber}>4.9</span>

                                        </div>

                                    </div>

                                    <div className={"row " + styles.profileSummaryDiv}>
                                        <div className="col col-lg-8">
                                            <span className={styles.name}>Number of bids:
                                            </span>

                                        </div>
                                        <div className="col col-lg-4">
                                            <span className={styles.number}>2341</span>

                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col col-lg-8">
                                            <span className={styles.name}>Number fulfilled:
                                            </span>

                                        </div>
                                        <div className="col col-lg-4">
                                            <span className={styles.number}>10356</span>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.editprofilebox}>
                                    <button className={styles.editprofile}>
                                        <span className={styles.editprofiletxt}>Edit Profile</span>
                                    </button>

                                </div>

                            </div>

                        </div>
                        <div className={styles.about + " col-md-9 col-sm-12"}>
                            <div className={styles.heading2}>About</div>

                            <div className={styles.whitebox}>
                                <p className={styles.whitepara}>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially
                                    unchanged.</p>

                            </div>
                            <div className={styles.bluebox}>
                                <div className={styles.expertsin}>Experts in:</div>

                                <div className={styles.btns}>
                                    <span className={styles.expertSkill + " btn"}>Certified Diabetes Educator</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                    <span className={styles.expertSkill + " btn"}>Chronic Disease Management</span>
                                </div>

                            </div>

                            <div className={styles.reviews}>
                                <p className={styles.heading3}>Reviews</p>
                                <div className={styles.reviewlist}>
                                    <div className="row">
                                        <div className={styles.reviewlistinner + " col-md-8 col-sm-8 col-xs-8"}>
                                            <div className={styles.alice}>Alice P.</div>
                                            <div className={styles.days}>2 days ago</div>

                                        </div>
                                        <div className=" col-md-4 col-sm-4 col-xs-4">
                                            <div className={styles.wrapperDiv}>
                                                  
                                                    <span className={styles.rating}>
                                                        <span className={styles.ratingtxt}>5.0</span>
                                                    </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 col-sm-10 col-xs-10">
                                            <div className={styles.team}>
                                                <p>Big thanks to support team! 
                                                    
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-2"></div>

                                    </div>
                                </div>
                                <div className={styles.reviewlist}>
                                    <div className="row">
                                        <div className={styles.reviewlistinner + " col-md-8 col-sm-8 col-xs-8"}>
                                            <div className={styles.alice}>Alice P.</div>
                                            <div className={styles.days}>2 days ago</div>

                                        </div>
                                        <div className=" col-md-4 col-sm-4 col-xs-4">
                                            <div className={styles.wrapperDiv}>
                                                  
                                                    <span className={styles.rating}>
                                                        <span className={styles.ratingtxt}>5.0</span>
                                                    </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 col-sm-10 col-xs-10">
                                            <div className={styles.team}>
                                                <p>Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-2"></div>

                                    </div>
                                </div><div className={styles.reviewlist}>
                                    <div className="row">
                                        <div className={styles.reviewlistinner + " col-md-8 col-sm-8 col-xs-8"}>
                                            <div className={styles.alice}>Alice P.</div>
                                            <div className={styles.days}>2 days ago</div>

                                        </div>
                                        <div className=" col-md-4 col-sm-4 col-xs-4">
                                            <div className={styles.wrapperDiv}>
                                                  
                                                    <span className={styles.rating}>
                                                        <span className={styles.ratingtxt}>5.0</span>
                                                    </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 col-sm-10 col-xs-10">
                                            <div className={styles.team}>
                                                <p>Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-2"></div>

                                    </div>
                                </div><div className={styles.reviewlist}>
                                    <div className="row">
                                        <div className={styles.reviewlistinner + " col-md-8 col-sm-8 col-xs-8"}>
                                            <div className={styles.alice}>Alice P.</div>
                                            <div className={styles.days}>2 days ago</div>

                                        </div>
                                        <div className=" col-md-4 col-sm-4 col-xs-4">
                                            <div className={styles.wrapperDiv}>
                                                  
                                                    <span className={styles.rating}>
                                                        <span className={styles.ratingtxt}>5.0</span>
                                                    </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-10 col-sm-10 col-xs-10">
                                            <div className={styles.team}>
                                                <p>Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                    Big thanks to support team! sdf jlkjsd Big thanks to support team! sdf jlkjsd
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-sm-2 col-xs-2"></div>

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

export default Profile;