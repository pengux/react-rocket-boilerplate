'use strict';

var React              = require('react/addons');
var Reflux             = require('reflux');
var RouteHandler       = require('react-router').RouteHandler;

var Header             = require('./page/header');
var Footer             = require('./page/footer');

var App = React.createClass({

  mixins: [Reflux.ListenerMixin],

  componentWillMount: function() {
    console.log('About to mount App');
  },

  render: function() {
    return (
      <div>

        <Header />

        <RouteHandler params={this.props.params}
                      query={this.props.query} />

        <Footer />

      </div>
    );
  }

});

module.exports = App;