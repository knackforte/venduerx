import React, { Component } from 'react';
import styles from './Postview.module.css';

class Postview extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.middleContainer}>
                    <div className="row">
                        <div className="col-mid-3">
                            <label className={styles.label}>RiteAid</label>
                            <p className={styles.pera}>223W 231st Street<br/>Bronx NY 10463</p>

                        </div>
                        <div className="col-mid-5">
                            <ul className={styles.ul}>
                                <li className={styles.li}><label className={styles.bid}>Bid</label><p className={styles.price}>$25</p></li>
                                <li className={styles.li}><label className={styles.bid}>Rating</label><p className={styles.rating}>4.5</p></li>
                                <li className={styles.li}><label className={styles.bid}>Distance</label><p className={styles.rating}>3 miles</p></li>
                                <li className={styles.li}><label className={styles.bid}>Delivery</label><p className={styles.rating}>pickup</p></li>
                                 
                            </ul>
                             
                        </div>
                        <div className="col-mid-4">
                            <button className={styles.btn1}>Counter offer</button>
                            <button className={styles.btn2}>Accept</button>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}


export default Postview;