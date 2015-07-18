'use strict';

var React         = require('react/addons');
var Router        = require('react-router');
var Route         = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require('./app');
var Start         = require('./page/start');
var NotFound      = require('./page/not-found');

module.exports = (
  <Route handler={App} path='/'>

    <DefaultRoute handler={Start} />

    <Route name='Start' path='/' handler={Start} />

    <NotFoundRoute handler={NotFound} />

  </Route>
);