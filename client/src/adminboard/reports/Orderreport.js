import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios';
import { toast } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import './suppliereport.css'



const Report = () =>{
  const [from,setFrom] = useState("");
   const [to,setTo] = useState("");
   const [data,setData] = useState([]);

   const handleSubmit = (e) =>{
    e.preventDefault();
    const date = new Date();
    const today = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+String(date.getDate());
    // console.log(today);
    if(from>today)
        toast.error("From Date Should not be greater than today");
    else if(from>to)
        toast.error("From date should not be greater than to date");
    else{
            axios.get(`http://localhost:5000/order/report/${from}/${to}`).then((response)=>{
                console.log(response.data)
                setData(response.data)
            }).catch((err)=>{
                toast.error(err.body.data)
            })
    }
}

useEffect(()=>{
setData(data)},
[data,setData]
)

const colums = [
  {field:"orderid", headerName:"Id",width:100},
  {field:"email", headerName:"Email",width:180},
  {field:"pdtname", headerName:"Product Name",width:150},
  {field:"category", headerName:"Category",width:150},
  {field:"quantity", headerName:"Quantity",width:100},
  {field:"sprice", headerName:"Price",width:150},
  {field:"date", headerName:"Date",width:150},
]

//   console.log("Data: ");
//   console.log(data)
    return (

        <>
        <Navbar/>
        <Sidebar/>
        <div className='supplierdate'>
        <form className="form" onSubmit={handleSubmit}>
              <div className='supdate'>
                <label>From Date</label><br/>
                <input className='ipt' type='date' id='from' name='from' value={from || ""} onChange={(e)=>{setFrom(e.target.value)}} />
              </div>
              <div className='supdate'>
                <label>To Date</label><br/>
                <input className='ipt' type='date' id='to' name='to' value={to || ""} onChange={(e)=>{setTo(e.target.value)}} />
                <br/><br/><button type="submit" className="btn">submit</button>
              </div>              
            </form>         
        </div>

      <div className="dataTable" style={{height:"500px", padding:"30px"}}>
          <DataGrid style={{color:"black", backgroundColor:"white"}}
        rows={data}
        columns={colums}
        getRowId = {(row)=>row.orderid}
        components={{Toolbar:GridToolbar}}
       />
    </div> 
    </>
    );
};

export default Report;