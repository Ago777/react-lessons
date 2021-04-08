import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../assets/auth-page/index.css'
import SignIn from "../../../components/auth-page-components/sign-in";
import SignUp from "../../../components/auth-page-components/sign-up";

class AuthPage extends Component {
    state = {
        showSignIn: true
    }

    render() {
        const {showSignIn} = this.state;

        return (
            <div className={'auth'}>
                <div className={`container ${showSignIn ? '' : 'right-panel-active'}`} id="container">
                    <SignIn/>
                    <SignUp/>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={() => this.setState({isSignIn: true})}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={() => this.setState({isSignIn: false})}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AuthPage.propTypes = {};

export default AuthPage;