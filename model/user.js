const mongoose=require('mongoose')
// user model
const userSchema=({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



const Users=mongoose.model('user',userSchema);
module.exports=Users;