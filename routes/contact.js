var express = require('express');
var users=require('../Models/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});


router.post('/submit', function(req, res, next) {

 var b=req.body;
new users({

  name:b.name,
  email:b.email,
  contactno:b.contactno,
message:b.message,
gender:b.genderRadio,
course:b.selection1
}).save(function(err,user){
  if(err) res.json(err);
  res.render('acknowledge');
});

});



module.exports = router;