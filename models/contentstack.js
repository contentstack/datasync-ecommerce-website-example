var env = process.env.NODE_ENV || 'development'
var config = require('../config/' + env)
const Contentstack = require(config.sdk)


const Stack = Contentstack.Stack(config.contentstack)

Stack.connect(config.options).then((db)=>{
    console.log("db connection established!")
}).catch(console.error)


module.exports = Stack
