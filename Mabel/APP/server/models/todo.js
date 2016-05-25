/**
 * Created by ANGULAR on 24/05/2016.
 */

var mongoose=require('mongoose');
module.exports=mongoose.model('Todo', {
    text:{
        type:String,
        default:''
    }
});
