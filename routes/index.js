var express = require('express');
var router = express.Router();

const message = [
  {
    user : "Danie safari",
    text : "Hi there",
    date : Date()
  },
  {
    user : "Rodrigue safari",
    text : "Hi there",
    date : Date() 
  },
  {
    user : "Kerene safari",
    text : "Hi there",
    date : Date() 
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {data : message});
});

router.get('/new', function(req, res, next) {
  res.render('form', {data : message});
});

router.post('/new', function(req, res, next) {
  message.push({user : req.body.user , text: req.body.text , date : Date()})
  res.redirect("/");
});

module.exports = router;
