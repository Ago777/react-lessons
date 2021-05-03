import "../../../assets/styles/home-page/index.css";
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HomePage extends Component {
    render() {
        return (
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top">WELCOME</h1>
                    <hr className="w3-border-grey" style={{margin: 'auto', width: '40%'}}/>
                    <p className="w3-large w3-center">REACT WEBSITE</p>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {};

export default HomePage;