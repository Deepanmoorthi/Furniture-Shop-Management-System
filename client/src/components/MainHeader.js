import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/mpi1.jpg'
import '../pages/home/home.css'

const MainHeader = () => {
    return (
  //  <div style={{ backgroundImage: 'url(' + Image + ')', backgroundSize: '75%' }}>
    <header className='main_header'>
      
      <div className='container main_header-container'>
        <div className='main_header-left'>
        
          <h4>Choose your looks</h4>
          <h1>Kumaran Furnitures</h1>
          <p>Explore More Products !!!  Explore More Styles !!!</p>

          <Link className='btn' to='/product' >Buy Product</Link>
        </div>
        {/* <div className='background'>
           <img src={Image} alt='main Header' />
           </div> */}
       
    
        <div className='main_header-right'>
          <div className='main_header-circle'></div>
            <div className='main_header-image'>
              <img src={Image} alt='main Header' />
            </div>
        </div>
      </div>
 
    </header>
    // </div>
    
  )
}

export default MainHeader
