import React, {Component} from 'react';

class SignUp extends Component {
    signUpHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={'form'}>
                <h1 style={{marginBottom: '20px'}}>Create Account</h1>
                <input type="text" placeholder="Phone"/>
                <span>Phone is not valid</span>
                <input type="text" placeholder="Name"/>
                <span>Name is not valid</span>
                <input type="email" placeholder="Email"/>
                <span>Email is not valid</span>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat Password"/>
                <span>Passwords is not match</span>
                <button onClick={this.signUpHandler}>Sign Up</button>
                <div style={{marginTop: '5px'}}>
                    Already hav an account?
                    <span style={{color: 'red', cursor: 'pointer'}} onClick={() => this.props.toggleAuthForm('sign-in')}>Sign in</span>
                </div>
            </div>
        );
    }
};

export default SignUp;