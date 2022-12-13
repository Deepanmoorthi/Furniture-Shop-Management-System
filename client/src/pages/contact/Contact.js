
import React,{useState} from 'react'
import './contact.css'

import Header from '../../components/Header'
import HeaderImage from '../../images/mpi7.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Footer from '../../components/Footer'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'
 
const initialState = {
  name: '',
  email: '',
  message: '',
  rating: '',
};

const Contact = () => {

  const [state, setState] = useState(initialState);

  const {name, email, message, rating} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !message || !rating)
    {
        toast.error("Enter Data");
    }
    else{
        axios.post('http://localhost:5000/api/post/feedback',{
          name,email,message,rating
        }).then(() => {
          setState({name: '', email: '', message: '', rating: '' });
         })
        .catch((err) => toast.error(err.response.data));
        toast.success("Thank You for Your Feedback !!");
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
      <Header title="Get In Touch" image={HeaderImage}>
      At least once you've likely lusted after something like crazy, only to find it and realize, for whatever reason, 
      it doesn't sparkle as much in person. Rather than force it, let the dream go and accept that not everything is going to be right for you!!
      </Header>
      <div className='feedback'> 
      <br/><br/>
        <h2 className='conth2'>Fill Your Feedback Here !</h2>   
        <header className="FormApp-sign">
        <form onSubmit={handleSubmit}>
          <br/>
          <input className='ipt' type="text" id='name' name='name' value={name || ""} placeholder='Name' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="email" id='email' name='email' value={email || ""} placeholder='Eamil' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='message' name='message' value={message || ""} placeholder='Enter your Message' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          {/* <p>1:Very Good - 5: Very Bad</p> */}
          <input className='ipt' type="number" id='rating' name='rating' value={rating || ""} placeholder='Rate 1-5' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <br/>
          <div className='subut'><input className='btn' type="submit" value="SUBMIT"/></div>
          
        </form>
        </header>
      </div>
      <section className='contact'>
        <div className='container contact_container'>
            <div className='contact_wrapper'>
                <a href='mailto:deepanmoorthi362@gmail.com'><MdEmail/></a>
                <a href='mailto:deepanmoorthi362@gmail.com'><BsMessenger/></a>
                <a href='mailto:deepanmoorthi362@gmail.com'><IoLogoWhatsapp/></a>
            </div>
        </div>
      </section>
      
      <Footer/>
    </div>
  )
}

export default Contact