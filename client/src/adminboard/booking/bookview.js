import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './bookview.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/get/booking/${id}`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    
    <div style={{marginTop: '50px'}}>
      <div className='bookcard'>
        <br/>
        <div className='container'>
            <strong>ID  </strong>
            <span className='spanview'>{id}</span>
            <br/><br/>

            <strong>EMAIL  </strong>
            <span className='spanview'>{user.email}</span>
            <br/><br/>

            <strong>CONTACT  </strong>
            <span className='spanview'>{user.contact}</span>
            <br/><br/>

            <strong>MESSAGE </strong>
            <span className='spanview'>{user.message}</span>
            <br/><br/>

            <strong>PRODUCT</strong>
            <span className='spanview'>{user.pdtname}</span>
            <br/><br/>

            <strong>SIZE </strong>
            <span className='spanview'>{user.size}</span>
            <br/><br/>

            <strong>COLOR</strong>
            <span className='spanview'>{user.color}</span>
            <br/><br/>

            <strong>QUANTITY</strong>
            <span className='spanview'>{user.quantity}</span>
            <br/><br/><br/>

            <Link to='/bookform'>
            <div className='btn btn-edit'>GO BACK</div>
            </Link>
            <br/>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
