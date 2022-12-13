import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import '../../adminboard/booking/bookview.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/order/${id}`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <div style={{marginTop: '80px'}}>
      <div className='bookcard'>
        <br/>
        <div className='container'>
            <strong>ID</strong>
            <span className='spanview'>{id}</span>
            <br/><br/>

            <strong>EMAIL</strong>
            <span className='spanview'>{user.email}</span>
            <br/><br/>

            <strong>PRODUCT NAME</strong>
            <span className='spanview'>{user.pdtname}</span>
            <br/><br/>

            <strong>CATEGORY</strong>
            <span className='spanview'>{user.category}</span>
            <br/><br/>

            <strong>QUANTITY</strong>
            <span className='spanview'>{user.quantity}</span>
            <br/><br/>

            <strong>IMAGE</strong>
            <span className='spanview'>{user.pdtimage}</span>
            <br/><br/>

            <strong>SELLING PRICE</strong>
            <span className='spanview'>{user.sprice}</span>
            <br/><br/>


            <Link to='/adminorder'>
            <div className='btn btn-edit'>GO BACK</div>
            </Link><br/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
