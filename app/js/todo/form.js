'use strict';

var React = require('react/addons');
var TodoActions = require('./actions');

var TodoForm = React.createClass({

	create: function(e) {
		e.preventDefault();
		var task = this.refs.newTask.getDOMNode().value;

		TodoActions.create({"name": task});
	},

	render: function() {
		return (
			<form onSubmit={this.create}>
				<label>
					Add task
					<input type="text" ref="newTask" />
				</label>
			</form>
		);
	}
});

module.exports = TodoForm;
