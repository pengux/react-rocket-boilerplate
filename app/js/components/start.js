'use strict';

var React = require('react/addons');
var DocumentTitle   = require('react-document-title');

var Start = React.createClass({
	render: function() {
		return (
			<DocumentTitle title="Start page">
				<section>
					Hello world
				</section>
			</DocumentTitle>
		);
	}
});

module.exports = Start;
