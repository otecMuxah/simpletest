var express = require('express');
var router = express.Router();
var config = require('../config');
var fs = require('fs');

/* GET admin page. */
router
  .get('/', function (req, res, next) {
    if (req.cookies.name === config.name && req.cookies.password === config.password) {
      res.render('admin', {
        title: 'Admin Account'
      });
    } else {
      res.redirect("/login");
    }
  })
  .post('/', function (req, res, next) {
    var testName = req.body.name.replace(/\s+/g, '_').toLowerCase();
    var filePath = config.root + '/db/' + testName + '.json';

    console.log('admined', filePath);
  
    fs.appendFile(filePath, JSON.stringify(req.body), function() {
            res.end();
        });
  });

module.exports = router;