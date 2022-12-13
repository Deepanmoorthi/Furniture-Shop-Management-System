import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import './addedit.css'

import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const initialState = {
  supplierid: '',
  productname: '',
  category: '',
  quantity: '',
  description: '',
  date: '',
  cprice: '',
  sprice: '',
};

const AddEdit = ({supp}) => {

  const [state, setState] = useState(initialState);

  const { supplierid, productname, category, quantity, description, date, cprice, sprice } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  const loadData = useCallback(async () => {
    const response = await axios.get(`http://localhost:5000/api/get/adproduct/${id}`);
    setState(response.data);
  }, [id])

  const [picture, setPicture] = useState([]);
  useEffect(() => {
    loadData();
  }, [loadData])

  const handleImage = (e) => {
    console.log(e.target.files[0])
    setPicture({ images: e.target.files[0].name })
  }

  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productname || !category) {
      toast.error("Please enter data");
    }
    else {
      if (!id) {
        axios.post('http://localhost:5000/api/post/adproduct', {
          supplierid, productname, category, quantity, description, picture, date, cprice, sprice,
        }).then(() => {
          setState({ supplierid: '', productname: '', category: '', quantity: '', description: '', pdtimage: '', date: '', cprice: '', sprice: '' });
        })
          .catch((err) => toast.error(err.response.data));

        toast.success("Successfully Added");
      }
      else {
        axios.put(`http://localhost:5000/api/adproductupdate/${id}`, {
          supplierid, productname, category, quantity, description, picture, date, cprice, sprice,
        }).then(() => {
          setState({ supplierid: '', productname: '', category: '', quantity: '', description: '', pdtimage: '', date: '', cprice: '', sprice: '' });
        })
          .catch((err) => toast.error(err.response.data));

        toast.success("Successfully Updated");

      }
      navigate('/adminproduct');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='adminuserform'>
        <h3>{id ? 'UPDATE PRODUCT HERE !!' : 'ADD PRODUCT HERE !!'}</h3><br />
        <form onSubmit={handleSubmit}>
          <label >Supplier</label><br/>
        <select className='ipt' required name="supplierid" id="supplierid" onChange={handleInputChange}>
          <option>Select Supplier</option>
          {
            supp.map((supid, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={supid.supplierid}>{supid.email}</option>
                </React.Fragment>
              )
            })
          }
        </select><br/>

        <label htmlFor='productname'>Product Name</label><br />
        <input className='ipt' type='text' id='productname' name='productname' placeholder='PRODUCT NAME' value={productname || ""} onChange={handleInputChange} /><br />

        <label htmlFor='category'>Category</label><br />
        <input className='ipt' type='text' id='category' name='category' placeholder='CATEGORY' value={category || ""} onChange={handleInputChange} /><br />

        <label htmlFor='quantity'>Quantity</label><br />
        <input className='ipt' type='number' id='quantity' name='quantity' placeholder='QUANTITY' value={quantity || ""} onChange={handleInputChange} /><br />

        <label htmlFor='description'>Description</label><br />
        <input className='ipt' type='text' id='description' name='description' placeholder='DESCRIPTION' value={description || ""} onChange={handleInputChange} /><br />

        <label htmlFor='pdtimage'>Product Image</label><br />
        <input className='ipt' type='file' id='pdtimage' name='pdtimage' onChange={handleImage} /><br />

        <label htmlFor='date'>Date</label><br />
        <input className='ipt' type='date' id='date' name='date' placeholder='DATE' value={date || ""} onChange={handleInputChange} /><br />

        <label htmlFor='cprice'>Cost Price</label><br />
        <input className='ipt' type='number' id='cprice' name='cprice' placeholder='COST PRICE' value={cprice || ""} onChange={handleInputChange} /><br />

        <label htmlFor='sprice'>Selling Price</label><br />
        <input className='ipt' type='number' id='sprice' name='sprice' placeholder='SELLING PRICE' value={sprice || ""} onChange={handleInputChange} /><br /><br />


        <input className='buttn' type='submit' value={id ? 'UPDATE' : 'SAVE'} />
        <Link to='/adminproduct'>
          <input className='buttn' type='button' value='GO BACK' />
        </Link>

      </form>
    </div>
    </div >
  );
}

export default AddEdit