import React from 'react'
import Hero from '../components/Hero'
import About from '../components/Projects'

const about = () => {
  return (
    <div>
        <Hero heading='Project' message='Scroll down and see the Project details and Description.' />
        <About />
    </div>
  )
}

export default about