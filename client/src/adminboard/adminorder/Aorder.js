import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './aorder.css'

const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get/order");
        setData(response.data);
    };
    
    useEffect(() => {
        loadData();
    }, []);
    
    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/api/orderremove/${id}`);
            toast.success("Contact Deleted");
            setTimeout(() => loadData(), 500);
        }
    }

    console.log(data)

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <div className='users'>
            <div className='adduser'>
                <Link to='/orderadd'>
                <button className='butn butn-contact'>ADD ORDER</button>   
                </Link>
            </div>
        
        <table className='styled-table'>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>EMAIL</th>
                <th style={{textAlign: 'center'}}>PRODUCT NAME</th>
                <th style={{textAlign: 'center'}}>CATEGORY</th>
                <th style={{textAlign: 'center'}}>QUANTITY</th>
                <th style={{textAlign: 'center'}}>IMAGE</th>
                <th style={{textAlign: 'center'}}>SELLING PRICE</th>
                <th style={{textAlign: 'center'}}>ACTION</th>
            </tr>
        </thead>
        <tbody>
            
            {data.map((item, index) => {
                return(
                    <tr key={item.orderid}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.email}</td>
                        <td>{item.pdtname}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td><img src={require(`../../images/${item.pdtimage}`)} alt={item.pdtimage} width={50} height={50} /></td>
                        <td>{item.sprice}</td>
                        <td>
                            {/* <Link to={`/orderupdate/${item.orderid}`}>
                            <button className='butn butn-edit'>Edit</button>
                            </Link> */}
                            <button className='butn butn-delete' onClick={() => deleteContact(item.orderid)}>Delete</button>
                            <Link to={`/orderview/${item.orderid}`}>
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
