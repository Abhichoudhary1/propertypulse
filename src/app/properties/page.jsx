
import { fetchproperties } from "../../../utils/request"
import Propertycard from "../../Components/Propertycard"


const page = async() => {
  const properties = await fetchproperties()
 
  return (
   <section className="px-4 py-6">
    <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            properties.length === 0 ? (
              <h1>no properties found!</h1>
            ) : (
              
                properties.map((property)=>{
                  return <Propertycard key={property._id} property={property}/>
                })
              
            )
          }
        </div>
    </div>
   </section>
  )
}

export default page
