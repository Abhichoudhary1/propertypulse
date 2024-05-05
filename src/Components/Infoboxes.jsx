import InfoBox from "./Infobox"


const Infoboxes = () => {
  return (
    <div>
      
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
           <InfoBox heading={'For rentals'} backgroundColor="bg-gray-100" buttonInfo={{text:'Browse properties' , Link:'/properties', backgroundColor: 'bg-black'}}>
           Find your dream rental property. Bookmark properties and contact
            owners.
           </InfoBox>
             
          
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For property owners</h2>
            <p className="mt-2 mb-4">
 
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.

            </p>
            <a href="/properties.html" className="inline-block bg-black text-white rounded-sm p-2">
             add property
          </a>
          </div>
         
            
          
        </div>
      </div>
    </section>
  
    </div>
  )
}

export default Infoboxes
