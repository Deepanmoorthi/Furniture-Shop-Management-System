import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './view.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/get/service/${id}`)
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
            <span className='spanview'>{user.sname}</span>
            <br/><br/>

            <strong>CONTACT</strong>
            <span className='spanview'>{user.contact}</span>
            <br/><br/>

            <strong>MESSAGE</strong>
            <span className='spanview'>{user.message}</span>
            <br/><br/>

            <strong>WORKTYPE</strong>
            <span className='spanview'>{user.worktype}</span>
            <br/><br/>

            <Link to='/serviceform'>
            <div className='btn btn-edit'>Go BACK</div><br/>
            </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default View
