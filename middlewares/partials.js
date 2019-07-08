const async = require('async')
const Contentstack = require('../models/contentstack')
const Stack = Contentstack.Stack

module.exports = function (req, res, next) {
  async.series([
    (callback) => {
      // Get Header data
      return Stack.contentType('header')
        .entry()
        .includeReferences()
        .find()
        .then((result) => callback(null, result))
        .catch(callback)
    },
    (callback) => {
      // Get Footer data
      return Stack.contentType('footer')
        .entry()
        .find()
        .then((result) => callback(null, result))
        .catch(callback)
    }
  ], (error, success) => {
    try {
      if (error) {
        console.error(
          'Middleware ran into errors!\nPlease check if your app contains published versions of \'header\' and \'footer\' content types!')
        return next(error)
      }
      res.locals.header = success[0]
      res.locals.footer = success[1]
      return next()
    } catch (error) {
      console.error('Error in partials')
      return next(error)
    }
  })
}
