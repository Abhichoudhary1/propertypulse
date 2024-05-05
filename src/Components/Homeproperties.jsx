
 import Link from "next/link"
import Propertycard from "./Propertycard"
import { fetchproperties } from "../../utils/request"
const Homeproperties = async() => {
  const properties = await fetchproperties()
     const recentproperties = 
        properties.sort(()=>{
            Math.random() - Math.random()
        }).slice(0,3)
     

  return (<>
   <section className="px-4 py-6">
       <div className="container-xl lg:container m-auto">
         <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent properties
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                recentproperties.map((property)=>(<Propertycard key={property._id} property={property}/>))
            }
         </div>
       </div>

    </section>

    <section className="m-auto max-w-lg my-10 px-6">
    <Link href="/properties" className="block bg-black text-white py-4 rounded-xl text-center">
        View all properties
    </Link>
    </section>
  </>
   
    
  )
}

export default Homeproperties
