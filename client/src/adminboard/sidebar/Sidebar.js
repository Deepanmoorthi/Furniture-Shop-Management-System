import "./sidebar.css";
import {MdDashboard, MdOutlineProductionQuantityLimits, MdMiscellaneousServices, MdFeedback, MdOutlineLocalGroceryStore} from "react-icons/md";
import {FaPeopleArrows, FaUserPlus, FaBookReader} from "react-icons/fa";
import {AiFillDropboxSquare} from "react-icons/ai";
import { Link } from "react-router-dom";

import Users from "../users/Users";
import Supplier from "../supplier/Supplier";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <hr/>
      <br/>
      
      <div className="center">
        <ul>
          <br/>
          <Link to="/admin">
            <li>
              <MdDashboard className="icon" />
              <span className="spanside">Dashboard</span>
            </li>
          </Link>
          <p className="title">CONTACTS</p>
          <Link to="/user" onClick={() => {<Users/>}}>
            <li>
              <FaUserPlus className="icon" />
              <span className="spanside">Users</span>
            </li>
          </Link>
          <Link to="/supplier" onClick={() => {<Supplier/>}}>
            <li>
              <FaPeopleArrows className="icon" />
              <span className="spanside">Supplier</span>
            </li>
          </Link>
          
          <p className="title">PROCESS</p>
          <Link to="/adminproduct">
            <li>
              <AiFillDropboxSquare className="icon" />
              <span className="spanside">Products</span>
            </li>
          </Link>
          <Link to="/adminorder">
            <li>
              <MdOutlineProductionQuantityLimits className="icon" />
              <span className="spanside">Orders</span>
            </li>
          </Link>
          <Link to="/bookform" >
            <li>
              <FaBookReader className="icon" />
              <span className="spanside">Booking</span>
            </li>
          </Link>
          
          <p className="title">FORMS</p>
          <Link to="/serviceform" >
            <li>
              <MdMiscellaneousServices className="icon" />
              <span className="spanside">Service</span>
            </li>
          </Link>
          <Link to="/feedform" >
            <li>
              <MdFeedback className="icon" />
              <span className="spanside">Feedback</span>
            </li>
          </Link>
          
          <p className="title">REPORTS</p>
          <Link to="/purchasereport" >
            <li>
              <MdOutlineLocalGroceryStore className="icon" />
              <span className="spanside">Purchase</span>
            </li>
          </Link>
          <Link to="/orderreport" >
            <li>
              <MdOutlineProductionQuantityLimits className="icon" />
              <span className="spanside">Order</span>
            </li>
          </Link>
            <Link to="/bookingreport" >
            <li>
              <MdFeedback className="icon" />
              <span className="spanside">Booking</span>
            </li>
          </Link>
          
          
        </ul>
      </div>
      
      


    </div>
  );
};

export default Sidebar;
