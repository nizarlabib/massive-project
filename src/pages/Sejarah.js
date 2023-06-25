import React from 'react'
import Header from '../components/wisata/sejarah/headersejarah'
import Dashboard from '../components/wisata/sejarahdashboard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Sejarah= ()  => {
    return (
      <div>
          <Navbar/>
          <Header/>
          <Dashboard/>
          <Footer/>
      </div>
    )
  }
  
  export default Sejarah