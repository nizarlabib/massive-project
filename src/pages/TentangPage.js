import React from 'react'
import Tentang from '../components/tentang/tentang'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Herotentang from '../components/tentang/herotentang'
import TripData from '../components/tentang/TripData'
import BannerTentang from '../components/tentang/bannerTentang'

const TentangPage= ()  => {
  return (
    <div>
        <Navbar/>
        <Tentang/>
        <Herotentang/>
        <TripData/>
        <BannerTentang/>
        <Footer/>
    </div>
  )
}

export default TentangPage