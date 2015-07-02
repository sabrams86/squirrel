var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var squirrel = db.get('users');
var bcrypt = require('bcryptjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, 8);
  var username = req.body.username;
  var email = req.body.email;
  squirrel.insert({username: username, email: email, password: hash});
  res.cookie('username', username);
  res.redirect('/');
})

module.exports = router;
