var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET home page. */
router
  .get('/', function (req, res, next) {
    res.render('login', {});
  })
  .post('/', function (req, res, next) {
    if (req.body.name === config.name && req.body.password === config.password) {
      res.cookie('name', config.name, { maxAge: config.saveAuth, httpOnly: true });
      res.cookie('password', config.password, { maxAge: config.saveAuth, httpOnly: true })
      res.redirect("/admin");
    } else {
      res.send("wrong!");
    }
  });

module.exports = router;