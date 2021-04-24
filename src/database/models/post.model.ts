import mongoose from 'mongoose'

const {Schema}= mongoose


const postSchema = new Schema({
body:{type:String,maxlength:200},
attachment:{type:String,required:false},
likes: { type: Number, required: false, default: 0 },
dislikes: { type: Number, required: false, default: 0 },
createdAt:{type:Date},
comments:[{body:String,createdAt:Date,likes:Number,disklikes:Number}]
})

const Post = mongoose.model('post',postSchema)

module.exports=Post;