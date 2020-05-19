import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainPage from 'pages/main';
import ApplyPage from 'pages/apply';
import CheckPage from 'pages/check';
import ErrorPage from 'pages/error';
import ReviseComponent from 'components/revise';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/apply" component={ApplyPage} />
      <Route path="/check" component={CheckPage} />
      <Route
        path="/revise/:pk/:phone/:classNum/:studentNum/:name/:field/:content"
        component={ReviseComponent}
      />
      <Route path="/error" component={ErrorPage} />
      <Redirect to="/error" />
    </Switch>
  );
};
