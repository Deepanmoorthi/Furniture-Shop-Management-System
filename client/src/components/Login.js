import React, { useState, useEffect } from 'react';
import formimg from '../images/mpi1.jpg'
import {Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Form from './form'
import axios from 'axios';
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Gproduct/Pnavbar/Navbar2'


import '../components/Login.css';


const initialState = {
    email: '',
    password: ''
};

function Login() {
    const [state, setState] = useState(initialState);

    const [user, setUser] = useState({});

    const {id} = useParams();

    const{email,password} = state;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/get`)
        .then((resp) => setUser(resp.data)); 
      }, [id]); 

      

      const handleSubmit=(e)=>{
            e.preventDefault();
            let flag=0;
            for(let i=0;i<user.length;i++){
                if(email ===user[i].email && password ===user[i].password){
                    
                    flag=1;
                    break;
                }
            }
            if(flag===1){
                navigate('/product');
            }else{
                toast.error("Invalid Login");
            }
        }

        const handleInputChange = (e) => {
                const {name, value} = e.target;
                setState({ ...state, [name]: value});
            };
return (
    <> <Navbar />
    <Navbar2 />
    <div className="FormApp">
    <div className='formimg'>
        <img src={formimg} alt='img'/>
    </div>
  
    <div className='formpage'> 
        <h1>LoG iN !</h1>   
        <header className="FormApp-header">
        <form onSubmit={handleSubmit}>
        
        
            <br/>
            <input className='ipt' id='email' name='email' type="email" value={email || ''} placeholder='Email' onChange={(e)=> {handleInputChange(e)}} /><br/>
            <br/>
            
            <input className='ipt' id='password' name='password' type="password" value={password || ''} placeholder='Password' onChange={(e)=> {handleInputChange(e)}} /><br/>
            <br/>
            <div className='subbut'><input className='btn' type="submit" value="LOGIN"/>
            
            <Link to="/signup" onClick={() => {<Form/>}}>
                <br/><p>Signup here</p>
            </Link>
            </div>
        </form>
        </header>
    </div>
    </div>
</>
);
}

export default Login;