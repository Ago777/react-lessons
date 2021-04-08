import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Header from "./containers/header";
import Footer from "./containers/footer";
import HomePage from "./containers/routes/home-page";
import AuthPage from "./containers/routes/auth-page";
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
                    <Route exact path='/auth' component={AuthPage}/>
                    <Redirect to={'/'}/>
                </Switch>
                {!isAuthPage && <Footer/>}
            </div>
        );
    }
}

App.propTypes = {};

export default withRouter(App);
