import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

import './serviceform.css'

const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/get/service");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/serremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

  return (
    <div >
        <Navbar/>
        <Sidebar/>
        <div className='serform' style={{marginTop: "150px"}}>
        
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>NAME</th>
                <th style={{textAlign: 'center'}}>CONTACT</th>
                <th style={{textAlign: 'center'}}>MESSAGE</th>
                <th style={{textAlign: 'center'}}>WORKTYPE</th>
                <th style={{textAlign: 'center'}}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={item.serid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.sname}</td>
                        <td>{item.contact}</td>
                        <td>{item.message}</td>
                        <td>{item.worktype}</td>
                        <td> 
                            <button className='butn butn-delete' onClick={() => deleteContact(item.serid)}>Delete</button>
                            <Link to={`/serviceform/${item.serid}`}>
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
