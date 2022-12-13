import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './booking.css'

const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/get/booking");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/bookremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='booking' style={{marginTop: "150px"}}>
        
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>EMAIL</th>
                <th style={{textAlign: 'center'}}>MESSAGE</th>
                <th style={{textAlign: 'center'}}>PRODUCT</th>
                <th style={{textAlign: 'center'}}>SIZE</th>
                <th style={{textAlign: 'center'}}>COLOR</th>
                <th style={{textAlign: 'center'}}>QUANTITY</th>
                <th style={{textAlign: 'center'}}>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={item.bookid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>{item.pdtname}</td>
                        <td>{item.size}</td>
                        <td>{item.color}</td>
                        <td>{item.quantity}</td>

                        <td> 
                            <button className='butn butn-delete' onClick={() => deleteContact(item.bookid)}>Delete</button>
                            <Link to={`/bookform/${item.bookid}`}>
                            <button className='butn butn-view'>View</button>
                            </Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default Users
