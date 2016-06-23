var express = require('express');
var router = express.Router();
var config = require('../config');
var fs = require('fs');
var dbPath = config.root + '/db/';

function readSend(req, res) {
    var id = req.testID,
        file;
  console.log(id);
  if (id) {
      file = dbPath + id + '.json';
      console.log(file);
      fs.stat(file, function (err, stat) {
        if (!err) {
          fs.readFile(file, 'utf8', function (err, data) {
            res.json(JSON.parse(data));
          });
        } else {
          res.json({error: 'Not found!'});
        }
      });
    }
}

/* GET page.with tests */
router
  .get('/', function (req, res, next) {
  
  console.log(req.xhr);
  
  if (req.xhr) {
    readSend(req, res);
  } else {
    res.render('tests', {
      title: 'Tests'
    });
  }
  })
  .post('/', function (req, res, next) {

  });

module.exports = router;