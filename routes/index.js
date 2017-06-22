var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { name: "Aaron H. English"});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {name: "Aaron H. English"});
});

module.exports = router;
