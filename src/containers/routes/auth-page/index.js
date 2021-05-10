import SignIn from "../../../components/auth-page-components/sign-in";
import SignUp from "../../../components/auth-page-components/sign-up";
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import '../../../assets/styles/auth-page/index.css'
import React, {Component} from 'react';

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
        if(localStorage.getItem('isLoggedIn')) {
            return <Redirect to={'/'}/>
        }

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

export default withRouter(AuthPage);