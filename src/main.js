import 'babel/polyfill';
import React from 'react';
import { Router, Route, Link } from 'react-router'
import FastClick from 'fastclick';
import App from './components/App/App';
const appContainer = document.getElementById('app');

const Routes = (
  <Route handler={App}>
  <Route name="/" handler={App}/>
  </Route>
);

function run() {
  FastClick.attach(document.body);
  React.render((
    <Router>
      <Route path="/" component={App}/>
    </Router>
  ), appContainer);
}

window.onload = run;

