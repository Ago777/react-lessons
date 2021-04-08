import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignUp extends Component {
    signUpHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="form-container sign-up-container">
                <div className={'form'}>
                    <h1 style={{marginBottom: '20px'}}>Create Account</h1>
                    <input type="text" placeholder="Phone"/>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Reapet Password"/>
                    <button onClick={this.signUpHandler}>Sign Up</button>
                </div>
            </div>
        );
    }
}

SignUp.propTypes = {};

export default SignUp;