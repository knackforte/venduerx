import React, {Component} from 'react';
import styles from '../assets/css/Manageoffers.module.css';
import Navbar from './Navbar';
import whiteclock from '../assets/whiteclock.png';
class Manageoffers extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className={styles.lable}>Search</div>
                    <div className={styles.con + " container "}>
                        <div className=" row ">
                            <div className="col-lg-6 col=md-6 col-sm-12 col-xs-12">
                                <div className={styles.rowstyle + " form-row "}>
                                    <form>
                                        <div class="form-group col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="location"
                                                name="location"
                                                placeholder="Location"></input>
                                        </div>
                                        <div class="form-group col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                            <select className="form-control" id="fullfillment">
                                                <option>Fullfillment Method</option>
                                                <option>I will pickup</option>
                                                <option>Deliver to me</option>
                                            </select>
                                        </div>
                                        <div
                                            className={styles.applybutton + " form-group col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                            <button type="button" className={styles.button + " btn btn-primary "}>
                                                Apply filters
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 col=md-6 col-sm-12 col-xs-12">
                                <ul class="nav ">
                                    <li class="nav-item">
                                        <a className={styles.navoptions} href="#">Posts</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className={styles.navoptions} href="#">Pending offers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className={styles.navoptions} href="#">Accepted offers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className={styles.navoptions} href="#">Counter offers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a className={styles.navoptions} href="#">History</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.lable1}>
                        Posts
                    </div>
                    <div className={styles.con + " container "}>
                        <div className={styles.card + " row "}>
                            <div className={styles.column1 + " col-lg-2 col-md-2 col-sm-12 col-xs-12 "}>
                                <div className={styles.timebox}>
                                    <span className={styles.timetext}>
                                        2d 11h 21m</span>
                                    <div>
                                        <span>
                                            <img className={styles.activeImage} src={whiteclock}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.posttitle}>
                                    Duloxetene DR 20mg 180 capsules 20mg $140 delivery or pickup
                                </div>
                                <div className={styles.postaddres}>
                                    223W 231st Street Bronx NY 10463
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.rowmargin + " row "}>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Views</div>
                                        <div className={styles.listfigure}>32</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-3 col-md-3 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Total bids</div>
                                        <div className={styles.listfigure}>12</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Best bid</div>
                                        <div className={styles.bestbid}>$134</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>

                                        <div className={styles.listtitle}>Distance</div>
                                        <div className={styles.listfigure}>12 miles</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btncolumn + " col-lg-2 col-md-2 col-sm-12 col-12 "}>
                                <button type="button" className={styles.partbutton + " btn btn-primary "}>
                                    Participate
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className={styles.con + " container "}>
                        <div className={styles.card + " row "}>
                            <div className={styles.column1 + " col-lg-2 col-md-2 col-sm-12 col-xs-12 "}>
                                <div className={styles.timebox}>
                                    <span className={styles.timetext}>
                                        2d 11h 21m</span>
                                    <div>
                                        <span>
                                            <img className={styles.activeImage} src={whiteclock}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.posttitle}>
                                    Duloxetene DR 20mg 180 capsules 20mg $140 delivery or pickup
                                </div>
                                <div className={styles.postaddres}>
                                    223W 231st Street Bronx NY 10463
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.rowmargin + " row "}>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Views</div>
                                        <div className={styles.listfigure}>32</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-3 col-md-3 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Total bids</div>
                                        <div className={styles.listfigure}>12</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Best bid</div>
                                        <div className={styles.bestbid}>$134</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>

                                        <div className={styles.listtitle}>Distance</div>
                                        <div className={styles.listfigure}>12 miles</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btncolumn + " col-lg-2 col-md-2 col-sm-12 col-12 "}>
                                <button type="button" className={styles.partbutton + " btn btn-primary "}>
                                    Participate
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.con + " container "}>
                        <div className={styles.card + " row "}>
                            <div className={styles.column1 + " col-lg-2 col-md-2 col-sm-12 col-xs-12 "}>
                                <div className={styles.timebox}>
                                    <span className={styles.timetext}>
                                        2d 11h 21m</span>
                                    <div>
                                        <span>
                                            <img className={styles.activeImage} src={whiteclock}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.posttitle}>
                                    Duloxetene DR 20mg 180 capsules 20mg $140 delivery or pickup
                                </div>
                                <div className={styles.postaddres}>
                                    223W 231st Street Bronx NY 10463
                                </div>
                            </div>
                            <div className={styles.column + " col-lg-4 col-md-4 col-sm-12 col-xs-12 "}>
                                <div className={styles.rowmargin + " row "}>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Views</div>
                                        <div className={styles.listfigure}>32</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-3 col-md-3 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Total bids</div>
                                        <div className={styles.listfigure}>12</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>
                                        <div className={styles.listtitle}>Best bid</div>
                                        <div className={styles.bestbid}>$134</div>
                                    </div>
                                    <div className={styles.lineDiv}>
                                        <div className={styles.vLine}></div>
                                    </div>
                                    <div className={"col-lg-2 col-md-2 col-sm-3 col-3 " + styles.zeroColPadding}>

                                        <div className={styles.listtitle}>Distance</div>
                                        <div className={styles.listfigure}>12 miles</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btncolumn + " col-lg-2 col-md-2 col-sm-12 col-12 "}>
                                <button type="button" className={styles.partbutton + " btn btn-primary "}>
                                    Participate
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Manageoffers;
 
