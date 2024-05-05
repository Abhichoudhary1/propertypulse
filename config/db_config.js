import mongoose from 'mongoose'

let connected = false

const connectDB = async()=>{
  mongoose.set('strictQuery', true)

  if(connected){
    console.log("mongodb is already connected")
  }

  try {
    mongoose.connect(process.env.MONGO_URI)
    connected = true
    console.log("mongdb is connected")
  } catch (error) {
    console.log(error)
  }
}
export default connectDB