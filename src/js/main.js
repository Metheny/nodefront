var alertstars = require("./lib/alertstars");
var _ = require("underscore");
var $ = require("jquery");

window.onload = function() {
	var messages = [
		"Welcome!", 
		"This is my page!",
		"Do you like it?",
		"I guess you couldn't answer, huh?"
	];

	_.each(messages, function (message) {
		$("body").append($("<p>").text(message));
	});
};