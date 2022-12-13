import React from 'react'
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'

import MainHeader from '../../components/MainHeader'
import Footer from '../../components/Footer'


import './home.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <MainHeader />
      <Footer />
    </div>
  )
}

export default Home
