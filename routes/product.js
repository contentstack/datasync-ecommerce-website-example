const express = require('express')
const Contentstack = require('../models/contentstack')
const router = express.Router()
const Stack = Contentstack.Stack

router.get('/product/:uid', (req, res, next) => {
  return Stack.contentType('product')
    .entries()
    .query({
      uid: req.params.uid
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
