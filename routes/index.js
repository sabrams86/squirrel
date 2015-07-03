var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var validator = require('../public/javascripts/server/error.js');
var squirrel = db.get('users');
var bcrypt = require('bcryptjs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Squirrel' });
});

router.post('/signup', function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);
  var username = req.body.username;
  var email = req.body.email;
  squirrel.insert({username: username, email: email, password: hash});
  res.cookie('username', username);
  res.redirect('/');
});

router.post('/', function (req, res, next) {
  var username = req.body.username;
  squirrel.findOne({username: username}, function (err, data) {
    if (data === undefined) {
      res.render('index', {error: 'username does not exist'});
    }
    else {
      var password = req.body.password;
      if (bcrypt.compareSync(password, data.password)) {
        res.cookie('username', username);
        res.redirect('/');
      }
      else {
        console.log(data.password);
        console.log(req.body.password);
        res.render('index', {error: 'incorrect password'});
      }
    }
  });
});

router.post('/logout', function (req, res, next) {
  res.clearCookie('username');
  res.redirect('/');
})

module.exports = router;
