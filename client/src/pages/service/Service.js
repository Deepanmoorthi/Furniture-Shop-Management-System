
import React,{useState} from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/mpi6.jpg'
import {trainers} from '../../data'
import Trainer from '../../components/Trainer'

import Footer from '../../components/Footer'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'

import './service.css'
import Navbar from '../../components/Navbar'
import Navbar2 from '../../components/Gproduct/Pnavbar/Navbar2'

const initialState = {
  sname: '',
  contact: '',
  message: '',
  worktype: '',
};

const Service = () => { 

  const [state, setState] = useState(initialState);

  const {sname, contact, message, worktype} = state;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!sname || !message || !worktype)
    {
        toast.error("Enter Data");
    }
    else if(contact.length!==10){
      toast.error("Invalid Contact");
    }
    else{
        axios.post('http://localhost:5000/api/post/service',{
          sname,contact,message,worktype
        }).then(() => {
          setState({sname: '', contact: '', message: '', worktype: '' });
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
      <Header title="Our Services" image={HeaderImage}>
      When we say we have a product for every project, we mean it. We are proud of our huge selection because it means we really have something for everyone. Let’s work together to find the right wooden product at the right price for your project.
      </Header>
      <div className='feedback'> 
      <br/><br/>
        <header className="FormApp-sign">
        <form onSubmit={handleSubmit}>
        <h2 className='serviceh2'>Service Form</h2>   
          <br/>
          <input className='ipt' type="text" id='sname' name='sname' value={sname || ""} placeholder='Servicer Name' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="number" id='contact' name='contact' value={contact || ""} placeholder='Contact' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='message' name='message' value={message || ""} placeholder='Enter your Message' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <input className='ipt' type="text" id='worktype' name='worktype' value={worktype || ""} placeholder='Work' required onChange={(e)=> {handleInputChange(e)}} /><br/>
          <br/>
          <br/>
          <div className='subut'><input className='btn' type="submit" value="SUBMIT"/></div>
          
        </form>
        </header>
      </div>
      <section className='trainers'>
        <div className='container trainers_container'>
          {
            trainers.map(({id, image, name, job, contact}) => {
              return <Trainer key={id} image={image} name={name} job={job} contact={contact}/>

            })
          }
        </div>
      </section>
      
      <Footer/>
    </div>
  )
}

export default Service