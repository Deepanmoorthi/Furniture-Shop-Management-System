import React,{useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './adprodview.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const View = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get/adproduct/${id}`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <div style={{marginTop: '80px'}}>
      <div className='productcard'>
        <br/>
        <div className='prodtcontainer'>
            <strong className='adview'>ID</strong>
            <span className='spanview'>{id}</span>
            <br/><br/>

            <strong className='adview'>PRODUCT NAME</strong>
            <span className='spanview'>{user.productname}</span>
            <br/><br/>

            <strong className='adview'>CATEGORY</strong>
            <span className='spanview'>{user.category}</span>
            <br/><br/>

            <strong className='adview'>DESCRIPTION</strong>
            <span className='spanview'>{user.description}</span>
            <br/><br/>

            <strong className='adview'>QUANTITY</strong>
            <span className='spanview'>{user.quantity}</span>
            <br/><br/>

            <strong className='adview'>IMAGE</strong>
            <span className='spanview'>{user.pdtimage}</span>
            <br/><br/>

            <strong className='adview'>COST PRICE</strong>
            <span className='spanview'>{user.cprice}</span>
            <br/><br/>

            <strong className='adview'>SELLING PRICE</strong>
            <span className='spanview'>{user.sprice}</span>
            <br/><br/>


            <Link to='/adminproduct'>
            <div className='btn btn-edit'>GO BACK</div>
            </Link><br/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default View
