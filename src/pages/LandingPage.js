import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/landingpage/carousel'
import Destinasi from '../components/landingpage/destinasi'
import Banner from '../components/landingpage/banner'
import Travel from '../components/landingpage/travel'
import Footer from '../components/footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Destinasi/>
        <Banner/>
        <Travel/>
        <Footer/>
    </div>
    
  )
}

export default LandingPage