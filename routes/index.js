var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-min', { title: 'Express' });
});

router.get('/pages/:name', function(req, res) {
  var name = req.params.name;
  res.render('pages/' + name);
});

module.exports = router;
