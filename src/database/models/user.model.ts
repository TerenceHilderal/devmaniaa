import mongoose  from 'mongoose'

const {Schema}= mongoose;

const userSchema = new Schema({
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true,unique:true},
  username:{type:String,required:true,unique:true,maxlength:30},
  avatar:{type:String,required:false},
  latent:{type:Boolean,default:0},
  friends:{type:[String],required:false},
  isAdmin:{type:Boolean,default:0},
})

const User = mongoose.model('user',userSchema)

module.exports=User