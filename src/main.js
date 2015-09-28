import 'babel/polyfill';
import React from 'react';
import { Router, Route } from 'react-router';
import FastClick from 'fastclick';
import App from './components/App/App';
const appContainer = document.getElementById('app');

function run() {
  FastClick.attach(document.body);
  React.render((
    <Router>
      <Route path="/" component={App}/>
    </Router>
  ), appContainer);
}

window.onload = run;

