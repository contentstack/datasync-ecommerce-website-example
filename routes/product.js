var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/product/:title', function (req, res, next) {
    Stack.contentType('product').entries()
        .query({
            "data.title": req.params.title
        })
        .includeReferences()
        .find()
        .then(function success(result) {
            res.render('product.html', {
                entry: result
            })
        }).catch(next)
})


module.exports = router