import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Products from './containers/routes/products-page';
import Profile from './containers/routes/profile-page';
import AuthPage from "./containers/routes/auth-page";
import HomePage from "./containers/routes/home-page";
import Film from './containers/routes/films-page';
import Footer from "./containers/footer";
import Header from "./containers/header";
import React, {Component} from 'react';

class App extends Component {
    render() {
        const {location} = this.props;
        const isAuthPage = location.pathname === '/auth';

        return (
            <div className={'main'}>
                {!isAuthPage && <Header/>}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/films' component={Film}/>
                    <Route exact path='/products' component={Products}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/auth' component={AuthPage}/>
                    <Redirect to={'/'}/>
                </Switch>
                {!isAuthPage && <Footer/>}
            </div>
        );
    }
}

export default withRouter(App);
