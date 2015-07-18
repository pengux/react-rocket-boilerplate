'use strict';

var React = require('react/addons');
var DocumentTitle   = require('react-document-title');
var TodoList = require('../todo/list');
var TodoForm = require('../todo/form');

var Start = React.createClass({
	render: function() {
		return (
			<DocumentTitle title="Start page">
				<section>
					<TodoForm />
					<TodoList />
				</section>
			</DocumentTitle>
		);
	}
});

module.exports = Start;
