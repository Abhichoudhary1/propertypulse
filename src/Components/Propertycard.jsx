import Image from "next/image"
import { FaBath, FaBed, FaLocationArrow, FaMoneyBill, FaRulerCombined, } from 'react-icons/fa'

const Propertycard = ({property}) => {

  const getPricing = () => {
    if (property.rates.nightly) {
      return property.rates.nightly + "/night";
    } else if (property.rates.weekly) {
      return property.rates.weekly + "/week";
    } else if (property.rates.monthly) {
      return property.rates.monthly + "/month";
    }
  };
  return (
    <div className="rounded-xl shadow-md relative">
    <Image
      src={`/images/properties/${property.images[0]}`}
      alt=""
      height={0}
      width={0}
      sizes={"100vw"}
      className="w-full h-auto rounded-t-xl"
    />
    <div className="p-4">
      <div className="text-left md:text-center lg:text-left mb-6">
        <div className="text-gray-600">{property.type}</div>
        <h3 className="text-xl font-bold">{property.name}</h3>
      </div>
      <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
         ${getPricing()}
      </h3>

      <div className="flex justify-center gap-4 text-gray-500 mb-4">
        <p className="flex items-center gap-2"><FaBed/>
           {property.beds}
          <span className="md:hidden lg:inline">Beds</span>
        </p>
        <p className="flex items-center gap-2"><FaBath/>
           {property.bath}
          <span className="md:hidden lg:inline">Baths</span>
        </p>
        <p className="flex items-center gap-2"><FaRulerCombined/>
          
          {property.square_feet}{" "}
          <span className="md:hidden lg:inline">sqft</span>
        </p>
      </div>

      <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
        <p className="flex items-center gap-2"><FaMoneyBill/>
          {property.rates.weekly}
           Weekly
        </p>
        <p className="flex items-center gap-2"><FaMoneyBill/>
          ${property.rates.monthly}
           monthly
        </p>
        
      </div>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="flex align-middle gap-2 mb-4 lg:mb-0">
         
          <span className="text-orange-700 flex items-center gap-1">
          <FaLocationArrow className="text-orange-700"/>
            {property.location.city}
            <h1></h1>
          </span>
        </div>
        <a
          href="property.html"
          className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Details
        </a>
      </div>
    </div>
  </div>
  )
}

export default Propertycard
