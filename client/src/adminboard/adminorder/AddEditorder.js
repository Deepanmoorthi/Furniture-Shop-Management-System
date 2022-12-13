import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import './addeditorder.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const initialState = {

  email: '',
    pdtname: '',
    category: '',
    quantity: '',  
    date: '',
    sprice: '',
};

const AddEdit = () => {

    const [state, setState] = useState(initialState);

    const {email, pdtname, category, quantity, date, sprice} = state;

    const navigate = useNavigate();

    const {id} = useParams();

    const loadData = useCallback(async()=>{
    const response = await axios.get(`http://localhost:5000/api/get/order/${id}`);
    setState(response.data);
  },[id])

    const [picture,setPicture] = useState([]);
    useEffect(() =>{
      loadData();
    },[loadData])  
  
    const handleImage = (e) =>{
      console.log(e.target.files[0])
      setPicture({ images: e.target.files[0].name})
    }
  
    console.log(state);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!pdtname || !category )
        {
            toast.error("Please enter data");
        }
        else{
          if(!id){
            axios.post('http://localhost:5000/api/post/order',{
               email, pdtname, category, quantity, picture, date, sprice, 
            }).then(() => {
                setState({ email:'',pdtname: '', category: '', quantity: '', pdtimage: '', date: '', sprice: ''});
            })
            .catch((err) => toast.error(err.response.data));

            toast.success("Successfully Added");
          }
          else{
            axios.put(`http://localhost:5000/api/adproductupdate/${id}`,{
              email, pdtname, category, quantity, picture, date, sprice,
            }).then(() => {
                    setState({ email: '', pdtname: '', category: '', quantity: '', pdtimage: '', date: '', sprice: ''});
                })
                .catch((err) => toast.error(err.response.data));

                toast.success("Successfully Updated");
                
            }
             navigate('/adminorder');
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
      <h3>{id ? 'UPDATE ORDER HERE !!' : 'ADD ORDER HERE !!'}</h3><br/> 
      <form onSubmit={handleSubmit}>
      <label htmlFor='pdtname'>Email</label><br/>
        <input className='ipt' type='text' id='email' name='email' placeholder='email' value={email || ""} onChange={handleInputChange}/><br/>

        <label htmlFor='pdtname'>Product Name</label><br/>
        <input className='ipt' type='text' id='pdtname' name='pdtname' placeholder='PRODUCT NAME' value={pdtname || ""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='category'>Category</label><br/>
        <input className='ipt' type='text' id='category' name='category' placeholder='CATEGORY' value={category||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='quantity'>Quantity</label><br/>
        <input className='ipt' type='number' id='quantity' name='quantity' placeholder='QUANTITY' value={quantity||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='pdtimage'>Product Image</label><br/>
        <input className='ipt' type='file' id='pdtimage' name='pdtimage' onChange={handleImage}/><br/>
        
        <label htmlFor='date'>Date</label><br/>
        <input className='ipt' type='date' id='date' name='date' placeholder='DATE' value={date||""} onChange={handleInputChange}/><br/>
        
        <label htmlFor='sprice'>Selling Price</label><br/>
        <input className='ipt' type='number' id='sprice' name='sprice' placeholder='SELLING PRICE' value={sprice||""} onChange={handleInputChange}/><br/><br/>
        

        <input className='buttn' type='submit' value={id ? 'UPDATE' : 'SAVE'}/>
        <Link to='/adminorder'>
               <input className='buttn' type='button' value='GO BACK'/>
        </Link>

      </form>
      </div>
    </div>
  );
}

export default AddEdit
