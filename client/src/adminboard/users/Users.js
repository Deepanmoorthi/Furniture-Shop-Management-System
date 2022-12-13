import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './users.css'


const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get/auser");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/api/cremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='users'>
            <div className='adduser'>
                <Link to='/caddcontact'>
                <button className='butn butn-contact'>ADD CONTACT</button>   
                </Link>
            </div>
        
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>NAME</th>
                <th style={{textAlign: 'center'}}>EMAIL</th>
                <th style={{textAlign: 'center'}}>CONTACT</th>
                <th style={{textAlign: 'center'}}>ADDRESS</th>
                <th style={{textAlign: 'center'}}>PINCODE</th>
                <th style={{textAlign: 'center'}}>PASSWORD</th>
                <th style={{textAlign: 'center'}}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={item.custid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.address}</td>
                        <td>{item.pincode}</td>
                        <td>{item.password}</td>
                        
                        <td>
                            <Link to={`/cupdate/${item.custid}`}>
                            <button className='butn butn-edit'>Edit</button>
                            </Link>
                            <button className='butn butn-delete' onClick={() => deleteContact(item.custid)}>Delete</button>
                            {/* <Link to={`/cview/${item.custid}`}>
                            <button className='butn butn-view'>View</button>
                            </Link> */}
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
