const env = process.env.NODE_ENV || 'development'
const config = require('../config/' + env)
const Contentstack = require(config.sdk).Contentstack
const Stack = Contentstack.Stack(config || {})

exports.connectDB = () => {
  return Stack.connect()
  .then(() => console.log('App connected to DB successfully!'))
  .catch(console.error)
}

exports.Stack = Stack
