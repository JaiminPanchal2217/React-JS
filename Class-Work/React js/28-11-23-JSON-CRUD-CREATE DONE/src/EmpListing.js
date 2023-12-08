import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function EmpListing() {
 
    const [empData,setEmpdata] = useState("")

    useEffect(()=>{
  
      fetch("http://localhost:8000/employee")
      .then((res)=>{ return res.json()})
      .then((data)=>{
         console.log(data)
         setEmpdata(data)
        })
      .catch((err)=>{console.log(err.message)})
    })
  
    return (
      <div className="App">
  
      <h2 className='text-center'>JSON CRUD</h2>
      <h3 className='text-center'>Employee Details</h3>
       <div className='container'>
  
      <Link to="/employee/create" className='btn btn-warning m-3'>Add New (+)</Link>
       <table className='table'>
          <thead className='table-dark'>
          <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
  
          <tbody>
          
          { empData && empData.map((item)=>(
  
            // console.log(item.name)
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <button className='btn btn-success me-2'>Edit</button>
              <button className='btn btn-danger me-2'>Delete</button>
              <button className='btn btn-primary'>View</button>
            </td>
          </tr>
  
          ))}
  
         
          </tbody>
  
        </table>
  
       </div>
     
      </div>
    );
}

export default EmpListing
