import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class SignIn extends Component {

    signInHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="form-container sign-in-container">
                <div className={'form'}>
                    <h1 style={{marginBottom: '20px'}}>Sign in</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button onClick={this.signInHandler}>Sign In</button>
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {};

export default withRouter(SignIn);