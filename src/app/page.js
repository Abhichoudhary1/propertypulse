import React from 'react'
import Hero from '../Components/Hero'
import Infoboxes from '../Components/Infoboxes'
import Homeproperties from '../Components/Homeproperties'
import connectDB from '../../config/db_config'








const page = () => {
connectDB()
  return (
    <div>
      <Hero/>

      <Infoboxes/>
      
      <Homeproperties/>
      
    </div>
  )
}

export default page
