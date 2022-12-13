import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import '../booking/bookview.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/supplier/${id}`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <div style={{marginTop: '150px'}}>
      <div className='bookcard'>
        <br/>
        <div className='container'>
            <strong>ID</strong>
            <span className='spanview'>{id}</span>
            <br/><br/>

            <strong>NAME</strong>
            <span className='spanview'>{user.name}</span>
            <br/><br/>

            {/* <strong>COMPANY</strong>
            <span className='spanview'>{user.company}</span>
            <br/><br/> */}

            <strong>EMAIL</strong>
            <span className='spanview'>{user.email}</span>
            <br/><br/>

            <strong>PHONE</strong>
            <span className='spanview'>{user.contact}</span>
            <br/><br/>

            <strong>PURCHASE AMOUNT</strong>
            <span className='spanview'>{user.stprice}</span>
            <br/><br/>

            <Link to='/supplier'>
            <div className='btn btn-edit'>Go BACK</div>
            </Link>
            <br/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default View
