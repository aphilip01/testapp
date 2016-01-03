var mongoose=require('mongoose');
mongoose.connect('mongodb://ajophilip:ajophilip@ds037205.mongolab.com:37205/thazhethil1');
var Schema=mongoose.Schema;
var userSchema=new Schema({

name:String,
contactno:Number,
email:String,
message:String,
gender:String,
course:String

});


module.exports=mongoose.model('Users',userSchema);