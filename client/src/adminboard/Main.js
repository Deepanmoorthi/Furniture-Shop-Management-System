import React from 'react'
import {FaPeopleArrows, FaUserPlus, FaBookReader} from "react-icons/fa";
import {MdDashboard, MdOutlineProductionQuantityLimits, MdMiscellaneousServices, MdFeedback, MdOutlineLocalGroceryStore} from "react-icons/md";
import {AiFillDropboxSquare} from "react-icons/ai";
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import "./main.css";



const Main = () => {
  return (
    <div className='admin'>
        <Navbar/>
        <Sidebar/>
        <h2 className='tit'>ADMIN DASHBOARD</h2>
        <section className='trainers'>
        <div className='container trainers_container'>
         <div className='card1' >
         <FaUserPlus className="icon" />
          <h3>User</h3>
          </div>
          <div className='card2' >
          <FaPeopleArrows className="icon" />
          <h3>Supplier</h3>
          </div>
          <div className='card3' >
          <AiFillDropboxSquare className="icon" />
          <h3>Product</h3>
        </div>
        <div className='card4' >
        <FaBookReader className="icon" />
          <h3>Booking</h3>
        </div>
        <div className='card5' >
        <MdMiscellaneousServices className="icon" />
          <h3>Service</h3>
        </div>
        <div className='card6' >
        <MdFeedback className="icon" />
         <h3>Feedback</h3>

        </div>
        </div>
      </section>

  
    </div>
    
  )
}

export default Main
