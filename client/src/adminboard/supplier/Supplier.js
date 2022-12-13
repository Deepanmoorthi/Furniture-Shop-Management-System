import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './supplier.css'

const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get/supplier");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/api/sremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='supplier'>
        <div className='addsupplier'>
                <Link to='/saddcontact'>
                <button className='butn butn-contact'>ADD SUPPLIER</button>   
                </Link>
            </div>
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>NAME</th>
                {/* <th style={{textAlign: 'center'}}>COMPANY</th> */}
                <th style={{textAlign: 'center'}}>EMAIL</th>
                <th style={{textAlign: 'center'}}>CONTACT</th>
                <th style={{textAlign: 'center'}}>PURCHASE AMOUNT</th>
                <th style={{textAlign: 'center'}}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={item.supplierid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.name}</td>                        
                        {/* <td>{item.company}</td> */}
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>{item.stprice}</td>
                        <td>
                            <Link to={`/supdate/${item.supplierid}`}>
                            <button className='butn butn-edit'>Edit</button>
                            </Link>
                            <button className='butn butn-delete' onClick={() => deleteContact(item.supplierid)}>Delete</button>
                            {/* <Link to={`/sview/${item.supplierid}`}>
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
