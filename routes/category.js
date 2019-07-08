const express = require('express')
const Contentstack = require('../models/contentstack')
const router = express.Router()
const Stack = Contentstack.Stack

router.get('/category/:id', (req, res, next) => {
  return Stack.contentType('product')
    .entries()
    .queryReferences({
      'category.uid': req.params.id
    })
    .includeReferences()
    .includeCount()
    .find()
    .then((result) => {
      return res.render('category.html', {
        entries: result
      })
    })
    .catch(next)
})

module.exports = router
