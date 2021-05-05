import React, {Component} from 'react';
import '../../../assets/styles/auth-page/index.css'
import SignIn from "../../../components/auth-page-components/sign-in";
import SignUp from "../../../components/auth-page-components/sign-up";

class AuthPage extends Component {
    state = {
        authForm: 'sign-in'
    }

    toggleAuthForm = (value) => {
        this.setState({
            authForm: value
        })
    }

    render() {
        const {authForm} = this.state;

        return (
            <div className={'auth'}>
                <div className={'container'}>
                    {authForm === 'sign-in' && <SignIn toggleAuthForm={this.toggleAuthForm}/>}
                    {authForm === 'sign-up' && <SignUp toggleAuthForm={this.toggleAuthForm}/>}
                </div>
            </div>
        );
    }
}

export default AuthPage;