import React, {Component} from 'react';

class SignUp extends Component {
    state = {
        phone: '',
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        invalidFields: [],
    }

    onChange = (e, field) => {
        this.setState({
            [field]: e.target.value,
            invalidFields: this.state.invalidFields.filter(item => item !== field)
        })
    };

    checkValidation = () => {
        const {email, password, repeatPassword, name, phone} = this.state;
        return {
            email: email.includes('@'),
            password: password.length >= 3,
            repeatPassword: password === repeatPassword,
            name: name.length >= 3,
            phone: phone.length >= 3,
        }
    };

    signUpHandler = () => {
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
            localStorage.setItem('auth', JSON.stringify({email: this.state.email, password: this.state.password}))
            this.props.toggleAuthForm('sign-in')
        }
    };

    render() {
        return (
            <div className={'form'}>
                <h1 style={{marginBottom: '20px'}}>Create Account</h1>
                <input type="text" placeholder="Phone" onChange={(e) => this.onChange(e, 'phone')}/>
                <input type="text" placeholder="Name" onChange={(e) => this.onChange(e, 'name')}/>
                <input type="email" placeholder="Email" onChange={(e) => this.onChange(e, 'email')}/>
                <input type="password" placeholder="Password" onChange={(e) => this.onChange(e, 'password')}/>
                <input type="password" placeholder="Repeat Password" onChange={(e) => this.onChange(e, 'repeatPassword')}/>
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