import React from 'react'
import Header from '../components/event/header'
import Navbar from '../components/navbar'
import Event from '../components/event/event'
import Footer from '../components/footer'

const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Event/>
        <Footer/>
    </div>
  )
}

export default EventPage