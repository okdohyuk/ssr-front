import React from 'react';
import MainPage from 'pages/main';
import ApplyPage from 'pages/apply';
import CheckPage from 'pages/check';
import ErrorPage from 'pages/error';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/apply' component={ApplyPage} />
            <Route path='/check' component={CheckPage} />
            <Route path='/error' component={ErrorPage} />
            <Redirect to='/error' />
        </Switch>
    );
}

export default withRouter(App);