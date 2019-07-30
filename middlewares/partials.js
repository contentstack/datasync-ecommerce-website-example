const async = require('async')
const Contentstack = require('../models/contentstack')
const Stack = Contentstack.Stack


module.exports = function (req, res, next) {
	async.series([
		function (callback) {
			// Get Header data
			Stack.contentType('header').entry()
				.includeReferences()
				.find()
				.then(function success(result) {
					callback(null, result);
				}).catch(callback)
		},
		function (callback) {
			//Get Footer data
      Stack.contentType('footer').entry()
        .excludeReferences()
				.find()
				.then(function success(result) {
					callback(null, result);
				}).catch(callback)
    }
  ], function (error, success) {
			if (error) return next(error);
			res.locals.header = success[0];
			res.locals.footer = success[1];
			next();
		})
}