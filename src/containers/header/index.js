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
                        <Link to={'/'} className="w3-bar-item w3-button">
                            <i className="fa fa-home" style={{marginRight: '5px'}}/>
                            HOME
                        </Link>
                        {/*<Link to={'/contact'} className="w3-bar-item w3-button">*/}
                        {/*    <i className="fa fa-envelope"/>*/}
                        {/*    CONTACT*/}
                        {/*</Link>*/}
                        {/*<Link to={'/about'} className="w3-bar-item w3-button">*/}
                        {/*    <i className="fa fa-envelope"/>*/}
                        {/*    ABOUT*/}
                        {/*</Link>*/}
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