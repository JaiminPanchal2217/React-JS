import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function EmpCreate() {
  
    const [id,idChnage] = useState("")
    const [name,nameChnage] = useState("")
    const [email,emailChnage] = useState("")
    const [phone,phoneChnage] = useState("")
    const [active,activeChnage] = useState(false)


    const navigite = useNavigate();


    // const[empData,setEmpdata]= useState("")

    const handleClick = (e)=>{
        e.preventDefault()
        
      
        // fetch("http://localhost:8000/employee",{
        //     method:"Post",
        //     headers:{"content-type":"application/json"},
        //     body:JSON.stringify()
        // },
            
           
        // .then()
        // .then()
        // .catch()
        console.log({id,name,email,phone,active})
        const empData ={id,name,email,phone,active}

        // console.log(e)


        fetch("http://localhost:8000/employee",{
            method:"Post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        })
        .then((res)=>{
            // console.log(res.json())
            // return res.json();

            if(res){
                alert("Saved succesfully...!")
                navigite('/')
            }
        })
        .then((data)=>{

            // console.log(data)
            idChnage(data.id)
            nameChnage(data.name)
            emailChnage(data.email)
            phoneChnage(data.phone)
            activeChnage(data.active)
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }
   



  return (
    <div className="container text-center m-5">
        <div className="row d-flex justify-content-center">
            <div className="card">
                <div className="card-title">
                    <h3>ADD Employee</h3>
                </div>
            </div>

            <div className="col-lg-6">
             
             <div className="crad-body">
             <form onSubmit={handleClick}className="container text-start m-3">

        <div className="col-12">
       <label className="form-label">ID</label>
        <input disabled="disabled" className="form-control"></input>
        </div>

        <div className="col-12">
       <label className="form-label">Name</label>
        <input  value={name} onChange={(e)=>{nameChnage(e.target.value)}} className="form-control"></input>
        </div>

        <div className="col-12">
       <label className="form-label">Email</label>
        <input  value={email} onChange={(e)=>{emailChnage(e.target.value)}} className="form-control"></input>
        </div>

        <div className="col-12">
       <label className="form-label">Phone</label>
        <input  value={phone} onChange={(e)=>{phoneChnage(e.target.value)}} className="form-control"></input>
        </div>

        <div className="col-12">
       
        <input value={active} onChange={(e)=>{activeChnage(e.target.value)}} type="checkbox" className="form-check-input"></input>{""}
        <label  className="form-label">Is Active</label>
        </div>

       
        <div className="col-12">
            {/* <button type="submit" className="btn-btn-success me-3">Save</button> */}
            <button type="submit" className="btn btn-success me-3">Save</button>
            {/* <button className="btn-btn-info">Back </button> */}
            <Link to="/" className="btn btn-warning">Back</Link>
       
        {/* <input type="checkbox" className="form-control"></input>
        <label className="form-label">Is Active</label> */}
        </div>




</form>
             </div>
                
            </div>

        </div>



    </div>
  )
}

export default EmpCreate
