import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import GithubUsers from './containers/routes/github-users-page';
import Profile from './containers/routes/profile-page';
import AuthPage from "./containers/routes/auth-page";
import HomePage from "./containers/routes/home-page";
import Film from './containers/routes/films-page';
import Shop from './containers/routes/shop-page';
import Footer from "./containers/footer";
import Header from "./containers/header";
import React, {Component} from 'react';

class App extends Component {
    // componentDidMount() {
    //     const isLoggedIn = localStorage.getItem('isLoggedIn');
    //     if (!isLoggedIn) {
    //         this.props.history.push('/auth')
    //     }
    // }

    render() {
        const isAuthPage = this.props.location.pathname === '/auth';

        return (
            <div className={'main'}>
                {!isAuthPage && <Header/>}
                <div className={'content'} >
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/films' component={Film}/>
                        <Route exact path='/shop' component={Shop}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/github-users' component={GithubUsers}/>
                        <Route exact path='/auth' component={AuthPage}/>
                        <Redirect to={'/'}/>
                    </Switch>
                </div>
                {!isAuthPage && <Footer/>}
            </div>
        );
    }
}

export default withRouter(App);
