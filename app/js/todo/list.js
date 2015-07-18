'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var TodoStore = require('./store');
var TodoActions = require('./actions');

var TodoList = React.createClass({

	mixins: [Reflux.ListenerMixin],

	getInitialState: function() {
		return {
			todos: []
		};
	},

	componentWillMount: function() {
		this.listenTo(TodoStore, this.onTodoChange);
		TodoActions.list();
	},

	onTodoChange: function(todos) {
		this.setState({
			todos: todos
		});
	},

	del: function(todo) {
		TodoActions.del(todo);
	},

	render: function() {
		return (
			<ul>
				{this.state.todos.map(function(todo) {
					return (
						<li>
							{todo.name}
							<a href="#" className="todo-del" onClick={this.del.bind(this, todo)}>Delete</a>
						</li>
					);
				}, this)}
			</ul>
		);
	}

});

module.exports = TodoList;
