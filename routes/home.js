var express = require('express')
var router = express.Router()
var Stack = require('../models/contentstack')


router.get('/', function (req, res, next) {
    var contentTypeUID = "product"
    Stack.contentType(contentTypeUID).entries()
        .find()
        .then(function success(result) {
            res.render('home.html', {
                entries: result
            })
        }).catch(next)
})

module.exports = router