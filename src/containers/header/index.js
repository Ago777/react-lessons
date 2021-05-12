import Logo from '../../assets/images/logo.jpg'
import {Link, NavLink} from "react-router-dom";
import React, {Component} from 'react';

class Header extends Component {

    signOut = () => {
        localStorage.removeItem('isLoggedIn');
    }

    render() {
        return (
            <div className="w3-black w3-card header">
                <Link to={'/'} className="w3-bar-item w3-wide">
                    <img src={Logo} alt={'logo'} width={50} height={25}/>
                </Link>
                <div className="w3-right w3-hide-small">
                    <Link to={'/films'} className="w3-bar-item w3-button">
                        <i className="fa fa-video-camera" style={{marginRight: '5px'}}/>
                        FILMS
                    </Link>
                    <Link to={'/github-users'} className="w3-bar-item w3-button">
                        <i className="fa fa-video-camera" style={{marginRight: '5px'}}/>
                        GITHUB USERS
                    </Link>
                    <Link to={'/shop'} className="w3-bar-item w3-button">
                        <i className="fa fa-product-hunt" style={{marginRight: '5px'}}/>
                        SHOP
                    </Link>
                    <Link to={'/profile'} className="w3-bar-item w3-button">
                        <i className="fa fa-user" style={{marginRight: '5px'}}/>
                        PROFILE
                    </Link>
                    <Link to={'/auth'} className="w3-bar-item w3-button" onClick={this.signOut}>
                        <i className="fa fa-sign-out" style={{marginRight: '5px'}}/>
                        SIGN OUT
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;