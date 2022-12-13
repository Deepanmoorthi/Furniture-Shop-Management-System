import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import './uaddedit.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const initialState = {
    name: '',
    email: '',
    address: '', 
    pincode: '', 
    phone: '', 
    password: '', 
    confpassword: '',
};

const AddEdit = () => {

    const [state, setState] = useState(initialState);

    const {name, email, address, pincode, phone, password, confpassword} = state;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      axios.get(`http://localhost:5000/api/get/auser/${id}`)
      .then((resp) => setState(resp.data)); 
    }, [id]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !phone )
        {
            toast.error("Please enter data");
        }
        else{
          if(!id){
            axios.post('http://localhost:5000/api/post/auser',{
                name,email,address, pincode, phone, password, confpassword
            }).then(() => {
                setState({name: '', email: '', address: '', pincode: '', phone: '', password: '', confpassword: ''});
            })
            .catch((err) => toast.error(err.response.data));

            toast.success("Successfully Added");
          }
          else{
            axios.put(`http://localhost:5000/api/cupdate/${id}`,{
                name,email,address, pincode, phone, password, confpassword
            }).then(() => {
                    setState({name: '', email: '', address: '', pincode: '', phone: '', password: '', confpassword: ''});
                })
                .catch((err) => toast.error(err.response.data));

                toast.success("Successfully Updated");
                
            }
             navigate('/user');
          }
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({ ...state, [name]: value});
    };

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <div className='adminuserform'>
      <h3>{id ? 'UPDATE USER HERE !!' : 'ADD USER HERE !!'}</h3><br/> 
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name</label><br/>
        <input className='ipt' type='text' id='name' name='name' placeholder='NAME' value={name || ""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='email'>Email</label><br/>
        <input className='ipt' type='text' id='email' name='email' placeholder='EMAIL' value={email||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='address'>Address</label><br/>
        <input className='ipt' type='text' id='address' name='address' placeholder='Address' value={address||""} onChange={handleInputChange}/><br/>
         
        <label htmlFor='pincode'>Pincode</label><br/>
        <input className='ipt' type='text' id='pincode' name='pincode' placeholder='Pincode' value={pincode||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='phone'>phone</label><br/>
        <input className='ipt' type='text' id='phone' name='phone' placeholder='phone' value={phone||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='password'>Password</label><br/>
        <input className='ipt' type='text' id='password' name='password' placeholder='Password' value={password||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='confpassword'>Confirm Password</label><br/>
        <input className='ipt' type='text' id='confpassword' name='confpassword' placeholder='Confirm Password' value={confpassword||""} onChange={handleInputChange}/><br/><br/>
        

        <input className='buttn' type='submit' value={id ? 'UPDATE' : 'SAVE'}/>
        <Link to='/user'>
               <input className='buttn' type='button' value='GO BACK'/>
        </Link>

      </form>
      </div>
    </div>
  );
}

export default AddEdit
