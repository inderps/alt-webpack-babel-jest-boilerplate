import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';
import FastClick from 'fastclick';
import App from './components/App';

const appContainer = document.getElementById('app');
const Route = Router.Route;
const Routes = (
  <Route handler={App}>
  <Route name="/" handler={App}/>
  </Route>
);

function run() {
  FastClick.attach(document.body);
  Router.run(Routes, function handler(Handler) {
    React.render(<Handler/>, appContainer);
  });
}

window.attachEvent('onload', run);
