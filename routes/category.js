var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/category/:id', function (req, res, next) {
    Stack.contentType('product')
        .entries()
        .query({
            "data.category.values": {
                $in: [req.params.id]
            }
        })
        .includeReferences()
        .includeCount()
        .find()
        .then(function success(result, count) {
            res.render('category.html', {
                entries: result
            })
        }).catch(next)
})

module.exports = router