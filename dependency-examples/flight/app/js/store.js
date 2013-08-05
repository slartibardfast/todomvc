/*global define */



define([
	'depot'
], function (depot) {
	'use strict';
	return depot('todos', { idAttribute: 'id' });
});
