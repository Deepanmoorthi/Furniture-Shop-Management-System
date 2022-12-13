import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'


const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/get/feedback");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/feedremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='feedback' style={{marginTop: "150px"}}>
        
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>NAME</th>
                <th style={{textAlign: 'center'}}>EMAIL</th>
                <th style={{textAlign: 'center'}}>MESSAGE</th>
                <th style={{textAlign: 'center'}}>RATING</th>
                <th style={{textAlign: 'center'}}>ACTION</th>

            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => {
                return(
                    <tr key={item.feedid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>{item.rating}</td>
                        <td> 
                            <button className='butn butn-delete' onClick={() => deleteContact(item.feedid)}>Delete</button>
                            <Link to={`/feedform/${item.feedid}`}>
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
