const express = require("express");
const Contentstack = require("../models/contentstack");
const router = express.Router();
const Stack = Contentstack.Stack;

router.get("/product/:url", (req, res, next) => {
  return Stack.contentType("product")
    .entries()
    .query({
      url: `/${req.params.url}`,
    })
    .includeReferences()
    .find()
    .then((result) => {
      return res.render("product.html", {
        entry: result,
      });
    })
    .catch(next);
});

module.exports = router;
