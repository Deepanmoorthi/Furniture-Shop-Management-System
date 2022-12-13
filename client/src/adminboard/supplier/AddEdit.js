import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import './saddedit.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const initialState = {
    name: '',
    email: '',
    contact: '',
    stprice: '',
};

const AddEdit = () => {

    const [state, setState] = useState(initialState);

    const {name, email, contact, stprice} = state;

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
      axios.get(`http://localhost:5000/api/get/supplier/${id}`)
      .then((resp) => setState(resp.data)); 
    }, [id]); 


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact || !stprice)
        {
            toast.error("Please enter data");
        }
        else{
          if(!id){
            axios.post('http://localhost:5000/api/post/supplier',{
                name,email,contact,stprice,
            }).then(() => {
                setState({name: '', email: '', contact: '' ,stprice: ''});
            })
            .catch((err) => toast.error(err.response.data));

            toast.success("Supplier Added Successfully");
          }
          else{
            axios.put(`http://localhost:5000/api/supdate/${id}`,{
                name,email,contact,stprice,
            }).then(() => {
                    setState({name: '', email: '', contact: '', stprice: '' });
                })
                .catch((err) => toast.error(err.response.data));

                toast.success("Supplier Updated");
                
            }
             navigate('/supplier');
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
    <div className='sadminform'>
      <h3>{id ? 'UPDATE SUPPLIER HERE !!' : 'ADD SUPPLIER HERE !!'}</h3><br/>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br/>
        <input className='ipt' type='text' id='name' name='name' placeholder='NAME' value={name || ""} onChange={handleInputChange}/><br/>
        <label>Email</label><br/>
        <input className='ipt' type='text' id='email' name='email' placeholder='EMAIL' value={email||""} onChange={handleInputChange}/><br/>
        <label>Contact</label><br/>
        <input className='ipt' type='text' id='contact' name='contact' placeholder='CONTACT' value={contact||""} onChange={handleInputChange}/><br/>
        <label>Total Amount</label><br/>
        <input className='ipt' type='text' id='stprice' name='stprice' placeholder='TOTAL PRICE' value={stprice||""} onChange={handleInputChange}/><br/><br/> 

        <input className='buttn' type='submit' value={id ? 'UPDATE' : 'SAVE'}/>
        <Link to='/supplier'>
               <input className='buttn' type='button' value='GO BACK'/>
        </Link>

      </form>
      </div>
    </div>
  );
}

export default AddEdit
