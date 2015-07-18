'use strict';

var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
	'create',
	'list',
	'del'
]);

module.exports = TodoActions;
