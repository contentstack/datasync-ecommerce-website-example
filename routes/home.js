const express = require('express')
const Contentstack = require('../models/contentstack')
const router = express.Router()
const Stack = Contentstack.Stack

router.get('/', (req, res, next) => {
  return Stack.contentType('product').entries()
    .find()
    .then((result) => {
      return res.render('home.html', {
        entries: result
      })
    })
    .catch(next)
})

module.exports = router
