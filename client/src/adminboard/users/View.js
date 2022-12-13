import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
// import './View.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/auser/${id}`)
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

            <strong>NAME</strong>
            <span className='spanview'>{user.name}</span>
            <br/><br/>

            <strong>EMAIL</strong>
            <span className='spanview'>{user.email}</span>
            <br/><br/>

            <strong>ADDRESS</strong>
            <span className='spanview'>{user.address}</span>
            <br/><br/>

            <strong>PINCODE</strong>
            <span className='spanview'>{user.pincode}</span>
            <br/><br/>

            <strong>PHONE</strong>
            <span className='spanview'>{user.phone}</span>
            <br/><br/>

            <strong>PASSWORD</strong>
            <span className='spanview'>{user.password}</span>
            <br/><br/>


            <Link to='/user'>
            <div className='btn btn-edit'>GO BACK</div>
            </Link><br/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
