import {withRouter} from "react-router-dom";
import React, {Component} from 'react';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
        invalidFields: [],
    }

    onChange = (e, field) => {
        this.setState({
            [field]: e.target.value,
            invalidFields: this.state.invalidFields.filter(item => item !== field)
        })
    }

    checkValidation = () => {
        const {email, password} = this.state;
        return {
            email: email.includes('@'),
            password: password.length >= 5
        }
    }

    signInHandler = () => {
        const validation = this.checkValidation();
        const isFormNotValid = Object.values(validation).includes(false);
        if(isFormNotValid) {
            const invalidFields = [...this.state.invalidFields];
           for(let key in validation) {
               if(!validation[key]) invalidFields.push(key);
               this.setState({
                   invalidFields: invalidFields
               })
           }
        }else {
            this.props.history.push('/')
        }
    }

    render() {
        const {email, password, invalidFields} = this.state;

        return (
            <div className={'form'}>
                <h1 style={{marginBottom: '20px'}}>Sign in</h1>
                <input type="email" placeholder="Email" value={email} onChange={(e) => this.onChange(e, 'email')}/>
                {invalidFields.includes('email') && <span style={{color: 'red'}}>Email is not valid</span>}
                <input type="password" placeholder="Password" value={password} onChange={(e) => this.onChange(e, 'password')}/>
                {invalidFields.includes('password') && <span style={{color: 'red'}}>Password is not valid</span>}
                <button onClick={this.signInHandler}>Sign In</button>
                <div style={{marginTop: '15px'}}>
                    Dont have an account?
                    <span style={{color: 'red', cursor: 'pointer'}}
                          onClick={() => this.props.toggleAuthForm('sign-up')}>Create an Account</span>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);