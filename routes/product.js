const express = require('express')
const Contentstack = require('../models/contentstack')
const router = express.Router()
const Stack = Contentstack.Stack

router.get('/product/:title', (req, res, next) => {
  return Stack.contentType('product')
    .entries()
    .query({
      title: req.params.title
    })
    .includeReferences()
    .find()
    .then((result) => {
      return res.render('product.html', {
        entry: result
      })
    })
    .catch(next)
})


module.exports = router
