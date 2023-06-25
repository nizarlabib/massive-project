import React from 'react'
import Header from '../components/wisata/gunung/headergunung'
import Dashboard from '../components/wisata/gunungdashboard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Gunung= ()  => {
    return (
      <div>
          <Navbar/>
          <Header/>
          <Dashboard/>
          <Footer/>
      </div>
    )
  }
  
  export default Gunung