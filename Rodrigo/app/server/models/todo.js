/**
 * Created by ANGULAR on 24/5/2016.
 */
var mongoose=require('mongoose');
module.exports=mongoose.model('Todo',{
   text:{
       type:String,
       default:''
   } 
});
