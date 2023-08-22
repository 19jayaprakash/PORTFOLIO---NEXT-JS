import React from 'react'
import Hero from '../components/Hero'
import Contact_Details from '../components/Contact_Details'

const contact_details = () => {
  return (
    <div>
        <Hero heading='Contact' message='Either Dm or call though the number'/>
        <Contact_Details/>
    </div>
  )
}

export default contact_details