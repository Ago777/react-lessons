import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="">
                <div className="w3-bar w3-black w3-card" id="myNavbar">
                    <Link to={'/'} className="w3-bar-item w3-button w3-wide">
                        <i className="fa fa-envelope"/>
                        LOGO
                    </Link>
                    <div className="w3-right w3-hide-small">
                        <Link to={'/films'} className="w3-bar-item w3-button">
                            <i className="fa fa-video-camera" style={{marginRight: '5px'}}/>
                            FILMS
                        </Link>
                        <Link to={'/products'} className="w3-bar-item w3-button">
                            <i className="fa fa-product-hunt" style={{marginRight: '5px'}}/>
                            PRODUCTS
                        </Link>
                        <Link to={'/profile'} className="w3-bar-item w3-button">
                            <i className="fa fa-user" style={{marginRight: '5px'}}/>
                            PROFILE
                        </Link>
                        <Link to={'/auth'} className="w3-bar-item w3-button">
                            <i className="fa fa-sign-out" style={{marginRight: '5px'}}/>
                            SIGN OUT
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;