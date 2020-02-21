import React, {Component } from 'react';

class Navbar extends Component{
    render()
    {
        return (
            <div>
                <nav className=" navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"></a>
                            <button className="navbar-toggle">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li>Home</li>
                                <li>Help Center</li>
                                <li>About Us</li>
                            </ul>

                        </div>

                    </div>

                </nav>

            </div>

        )
    }
}

export default Navbar;