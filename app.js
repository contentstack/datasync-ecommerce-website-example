const createError = require('http-errors')
const express = require('express')
const logger = require('morgan')
const nunjucks = require('nunjucks')
const Contentstack = require('./models/contentstack')
const app = express()
const path = require('path')
const env = process.env.NODE_ENV || 'development'
const config = require('./config/' + env)

//setting view and nunjuks configuration
app.set('view engine', 'html')
nunjucks.configure('views', {
  watch: true,
  autoescape: false,
  express: app
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

// setting static files
app.use('/static', express.static(__dirname + '/public'))
app.use('/images', express.static(path.join(__dirname, config.assetStore.baseDir)))
// Promise function. Runs/should in background.
Contentstack.connectDB()

//requiring routes
require('./routes')(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
