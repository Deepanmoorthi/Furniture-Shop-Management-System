import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'

import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'
import './order.css'
import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';



const initialState = {
    email: '',
    contact: '',
    message: '',
    pdtname: '',
    size: '',
    color: '',
    quantity:'',
    date:'',
  };


const Order = () => {

    const [state, setState] = useState(initialState);

  const {email, contact, message, pdtname, size, color, quantity, date} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !message || !size || !color || !quantity || !pdtname)
    {
        toast.error("Enter Data");
    }
    else if(contact.length!==10){
      toast.error("Invalid Contact");
    }
    else{
        axios.post('http://localhost:5000/api/post/book',{
          email,contact,message,pdtname,size,color,quantity,date
        }).then(() => {
          setState({email: '', contact: '', message: '',pdtname: '', size: '', color:'', quantity:'',date :''});
         })
        .catch((err) => toast.error(err.response.data));
        toast.success("Your Order is Confirmed !!");
      navigate('/');
    }
            
    }


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({ ...state, [name]: value});
  };

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className='order'> 
      <br/><br/>
        <h2 className='orh2'>Book Your Order !!</h2>   
        
        <header className="FormApp-sign">
        <form onSubmit={handleSubmit}>
          <br/>
          <input className='ipt' type="text" id='email' name='email' value={email || ""} placeholder='Email' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="number" id='contact' name='contact' value={contact || ""} placeholder='Contact' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='message' name='message' value={message || ""} placeholder='Enter your Message' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='pdtname' name='pdtname' value={pdtname || ""} placeholder='Product' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <p>Length - Breath - Height</p>
          <input className='ipt' type="text" id='size' name='size' value={size || ""} placeholder='Enter Size' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='color' name='color' value={color || ""} placeholder='Enter Color' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="number" id='quantity' name='quantity' value={quantity || ""} placeholder='Quantity' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type='date' id='date' name='date' placeholder='DATE' value={date||""}  required onChange={(e)=> {handleInputChange(e)}} /><br/>
        <br></br>
          <div className='subut'><input className='btn' type="submit" value="SUBMIT"/></div>
          
        </form>
        </header>
	    </div>
    <Footer/>
    </div>
  )
}

export default Order
