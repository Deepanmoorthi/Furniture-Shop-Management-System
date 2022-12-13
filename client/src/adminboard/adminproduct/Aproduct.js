import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './aproduct.css'

const Users = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get/adproduct");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if(window.confirm("Are you sure want to Delete")
        ) {
            axios.delete(`http://localhost:5000/api/adproductremove/${id}`);
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
                <Link to='/adproductadd'>
                <button className='butn butn-contact'>ADD PRODUCT</button>   
                </Link>
            </div>
        
        <table className='styled-table' style={{marginLeft: '12%'}}>
        <thead>
            <tr>
                <th style={{textAlign: 'center'}}>ID</th>
                <th style={{textAlign: 'center'}}>Email</th>
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
                    <tr key={item.productid}>
                        <th scope='row'>{index+1}</th>
                         <td>{item.email}</td>
                        <td>{item.productname}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td><img src={require(`../../images/${item.pdtimage}`)} alt={item.pdtimage} width={50} height={50} /></td>
                        
                        <td>{item.sprice}</td>
                        
                        <td>
                            <Link to={`/adproductupdate/${item.productid}`}>
                            <button className='butn butn-edit'>Edit</button>
                            </Link>
                            <button className='butn butn-delete' onClick={() => deleteContact(item.productid)}>Delete</button>
                            <Link to={`/adproductview/${item.productid}`}>
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
