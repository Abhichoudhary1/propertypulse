import connectDB from "../../../../config/db_config"
import property from "../../../../models/Property"


export const GET = async(request)=>{
   try {
     await connectDB()

     const properties = await property.find({})
     return new Response(JSON.stringify(properties),{
        status:200
     })
   } catch (error) {
      console.log(error)
   }

}