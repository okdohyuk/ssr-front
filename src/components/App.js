import React from 'react';

import HomePage from './home/home';
import ApplyPage from './apply/apply';
import CheckPage from './check/check';
import ErrorPage from './error/error';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/apply' component={ApplyPage} />
            <Route path='/check' component={CheckPage} />
            <Route path='/error' component={ErrorPage} />
            <Redirect to='/error' />
        </Switch>
    );
}

export default withRouter(App);