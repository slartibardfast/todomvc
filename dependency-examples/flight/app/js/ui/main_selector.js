/*global define */

define([
	'flight/component'
], function (defineComponent) {
	'use strict';

	function mainSelector() {
		/*jshint validthis: true */

		this.toggle = function (e, data) {
			var toggle = data.all > 0;
			this.$node.toggle(toggle);
		};

		this.after('initialize', function () {
			this.$node.hide();
			this.on(document, 'dataStatsCounted', this.toggle);
		});
	}

	return defineComponent(mainSelector);
});
