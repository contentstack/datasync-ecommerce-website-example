module.exports = function (app) {
  app.use('/', require('../middlewares'))
  app.use('/', require('./home'))
  app.use('/', require('./product'))
  app.use('/', require('./category'))
}