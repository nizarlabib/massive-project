import React from 'react'
import Tentang from '../components/tentang/tentang'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Herotentang from '../components/tentang/herotentang'

const TentangPage= ()  => {
  return (
    <div>
        <Navbar/>
        <Tentang/>
        <Herotentang/>
        <Footer/>
    </div>
  )
}

export default TentangPage