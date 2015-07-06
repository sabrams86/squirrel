var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var validator = require('../public/javascripts/server/error.js');
var squirrel = db.get('users');
var bcrypt = require('bcryptjs');

router.get('/', function(req, res, next) {
  if (req.cookies.username !== undefined) {
    squirrel.findOne({username: req.cookies.username}, function (err, data) {
    res.render('index', { title: 'Squirrel', scores: data.scores });
    })
  }
  else {
    res.render('index', { title: 'Squirrel' });
  }
});

router.post('/signup', function (req, res, next) {
  var username = req.body.username.toLowerCase();
  var email = req.body.email.toLowerCase();
  squirrel.findOne({username: username}, function (err, data) {
    if (data === null) {
      squirrel.findOne({email: email}, function (err, result) {
        if (result === null) {
          var hash = bcrypt.hashSync(req.body.password, 8);
          squirrel.insert({username: username, email: email, password: hash});
          res.cookie('username', username);
          res.redirect('/');
        }
        else {
          res.render('index', {errorSignup: 'email already exist'});
        }
      });
    }
    else {
      res.render('index', {errorSignup: 'username already exist'});
    }
  });
});

router.post('/', function (req, res, next) {
  var username = req.body.username.toLowerCase();
  squirrel.findOne({username: username}, function (err, data) {
    if (data === null) {
      res.render('index', {errorLogin: 'username does not exist'});
    }
    else {
      var password = req.body.password;
      if (bcrypt.compareSync(password, data.password)) {
        res.cookie('username', username);
        res.redirect('/');
      }
      else {
        res.render('index', {errorLogin: 'incorrect password'});
      }
    }
  });
});

router.post('/logout', function (req, res, next) {
  res.clearCookie('username');
  res.redirect('/');
});

router.post('/score', function (req, res, next) {
  squirrel.update({username: req.cookies.username}, {$push: {scores: {score: req.body.score, time: req.body.time, acorns: req.body.acorns}}})
  res.redirect('/');
});

module.exports = router;
