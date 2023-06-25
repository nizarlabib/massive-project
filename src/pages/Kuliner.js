import React from 'react'
import Header from '../components/wisata/kuliner/headerkuliner'
import Dashboard from '../components/wisata/kulinerdashboard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Kuliner= ()  => {
    return (
      <div>
          <Navbar/>
          <Header/>
          <Dashboard/>
          <Footer/>
      </div>
    )
  }
  
  export default Kuliner