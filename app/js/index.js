'use strict';

var React  = require('react/addons');
var Router = require('react-router');

var routes = require('./routes');

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler params={state.params} query={state.query} />, document.getElementById('app'));
});