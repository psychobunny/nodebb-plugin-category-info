var	fs = require('fs'),
	path = require('path'),
	async = require('async');

var CategoryInfo = {};


/*
* This is where we pull the base template, and replace the categories block with our custom partial.
*/
CategoryInfo.addRoute = function(custom_routes, callback) {
	function getBaseTemplate(next) {
		fs.readFile(path.resolve(__dirname, '../../public/templates/home.tpl'), function (err, template) {
			next(err, template);
		});
	}

	function getPartial(next) {
		fs.readFile(path.resolve(__dirname, 'partials/categories.tpl'), function (err, template) {
			next(err, template);
		});	
	}

	async.parallel([getBaseTemplate, getPartial], function(err, results) {
		var template = results[0],
			partial = results[1];
		
		// todo: this line should become a templates.js method, ie. templates.replaceBLock(blockname, partial);
		template = template.toString().replace(/<!-- BEGIN categories -->[\s\S]*<!-- END categories -->/g, partial)
		
		custom_routes.templates.push({
			"template": "home.tpl",
			"content": template
		});

		callback(null, custom_routes);
	});
};

CategoryInfo.addScripts = function(scripts, callback) {
	return scripts.concat([
			'plugins/nodebb-plugin-category-info/js/lib/main.js'
		]);
};


module.exports = CategoryInfo;
