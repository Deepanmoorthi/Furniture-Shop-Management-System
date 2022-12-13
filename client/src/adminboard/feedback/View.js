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
        axios.get(`http://localhost:5000/get/feedback/${id}`)
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
            <strong>ID </strong>
            <span className='spanview'>{id}</span>
            <br/><br/>

            <strong>NAME</strong>
            <span className='spanview'>{user.name}</span>
            <br/><br/>

            <strong>EMAIL</strong>
            <span className='spanview'>{user.email}</span>
            <br/><br/>

            <strong>MESSAGE</strong>
            <span className='spanview'>{user.message}</span>
            <br/><br/>

            <strong>RATING</strong>
            <span className='spanview'>{user.rating}</span>
            <br/><br/>

            <Link to='/feedform'>
            <div className='btn btn-edit'>Go BACK</div><br/>
            </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
