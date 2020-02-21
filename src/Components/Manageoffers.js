import React, {Component} from 'react';
import styles from '../assets/css/Manageoffers.module.css';
import Navbar from './Navbar';
class Manageoffers extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className={styles.search}>Search</div>
                    <div className={styles.con + " container " }>
                        <div className= " row ">
                            <div className={styles.rowstyle + " form-row "}>
                                <div class=" col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="location"
                                        name="location"
                                        placeholder="Location"></input>
                                </div>
                                <div class=" col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                    <select className="form-control" id="fullfillment">
                                        <option>Fullfillment Method</option>
                                        <option>I will pickup</option>
                                        <option>Deliver to me</option>
                                    </select>
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                    <button type="button" className={styles.button + " btn btn-primary "}>
                                     Apply filters
                                    </button>
                                </div>
                            </div>
                            <ul class="nav justify-content-end">
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
            </div>
        )
    }
}
export default Manageoffers;