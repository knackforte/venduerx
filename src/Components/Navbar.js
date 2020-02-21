import React, {Component} from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import styles from '../assets/css/Navbar.module.css';

class Navbar extends Component {

    render()
    {
        const homeStyle = "nav-link " + styles.customize;
        return (

           <div>
                <a className="navbar-brand" href="#">
                    <div className={styles.logo}>
                        <Logo height={45}/>
                    </div>
                </a>
                <nav className="navbar navbar-expand-lg navbar-light bg-white customnav">
                {/* <a className="navbar-brand" href="#">
                    <div className={styles.logo}>
                        <Logo height={45}/>
                    </div>
                </a> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className={styles.homeStyle} href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className={styles.homeStyle} href="#">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className={styles.homeStyle} href="#">About Us</a>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a
                                className={styles.homeStyle}
                            >Log in</a>
                        </li>
                        <li className="nav-item">
                            <div className={styles.signup}>
                                <a
                                    className={styles.homeStyle}
                                >Sign Up</a>
                            </div>
                        </li>
                    </ul> */}
                </div>
            </nav>


           </div> 
            
        )
    }
}

export default Navbar;