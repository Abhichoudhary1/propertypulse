import { Schema, model, models } from "mongoose";



const userSchema = new Schema({
   email:{
    type:String,
    unique:[true, 'email already exist'],
    required:[true, 'email is required'],
   },
    username:{
      type:String,
      required:[true,'username already exist']
    },
    image:{
      type:String,
    },
    bookmark:[{
      type:Schema.Types.ObjectId,
      ref:'property'
    }]
},{
   timestamps:true
})


const User = models.User || model('User', userSchema)

export default User