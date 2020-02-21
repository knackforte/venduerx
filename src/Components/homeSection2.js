import React, {Component } from 'react';

import { ReactComponent as Dollar} from '../assets/img/dollar.svg';
import { ReactComponent as Desktop} from '../assets/img/desktop-computer-screen-with-magnifying-glass-and-list.svg';
import { ReactComponent as Envelope} from '../assets/img/envelope.svg';
import styles from '../assets/homeSection2.module.css'

class HomeSection2 extends Component{
    render()
    {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className={styles.icon}>
                        <Dollar  />
                        </div>
                       
                        <p className={styles.pera}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>

                    <div className="col-sm-12 col-md-4">
                    <div className={styles.icon}>
                        <Desktop  />
                        </div>
                        <p className={styles.pera}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>

                    <div className="col-sm-12 col-md-4">
                    <div className={styles.icon}>
                        <Envelope  />
                        </div>
                        <p className={styles.pera}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    </div>
                    <div className="clearfix"></div>
                </div>

            </div>

            
        )
    }
}

export default HomeSection2;