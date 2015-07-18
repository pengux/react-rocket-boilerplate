'use strict';

var Reflux = require('reflux');
var TodoActions = require('./actions');

var TodoStore = Reflux.createStore({

	init: function() {
		this.todos = [
			{ name: "Task 1" }
		];

		this.listenTo(TodoActions.create, this.onCreate);
		this.listenTo(TodoActions.list, this.onList);
		this.listenTo(TodoActions.del, this.onDel);
	},

	onCreate: function(todo) {
		this.todos.push(todo);

		this.trigger(this.todos);
	},

	onList: function() {
		this.trigger(this.todos);
	},

	onDel: function(todo) {
		for(var i = 0; i < this.todos.length; i++) {
			if(this.todos[i] === todo) {
				this.todos.splice(i, 1);
			}
		}

		this.trigger(this.todos);
	}
});

module.exports = TodoStore;
