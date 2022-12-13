import React from 'react'
import './register.css'
import Login from '../../components/form'
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'
// import Footer from '../../components/Footer'

const Register = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Login/>
      {/* <Footer/> */}
    </div>
  )
}

export default Register
