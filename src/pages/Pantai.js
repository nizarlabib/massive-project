import React from 'react'
import Header from '../components/wisata/pantai/headerpantai'
import Dashboard from '../components/wisata/pantaidashboard'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Pantai= ()  => {
    return (
      <div>
          <Navbar/>
          <Header/>
          <Dashboard/>
          <Footer/>
      </div>
    )
  }
  
  export default Pantai