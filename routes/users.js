var express = require('express');
var users=require('../Models/users');
var router = express.Router();


/* GET users listing. */
router.get('/',function(req,res,next){

users.find({},function(err,docs){

	res.render('users',{users:docs});
  //res.send("users page");

});

});


module.exports = router;
