import React from 'react'
import Mitra from '../components/mitra/gabungmitra'
import Border from '../components/mitra/border'
import Travel from '../components/landingpage/travel'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const MitraPage= ()  => {
    return (
      <div>
          <Navbar/>
          <Mitra/>
          <Border/>
          <Travel/>
          <Footer/>
      </div>
    )
  }
  
  export default MitraPage