import React, { useState } from 'react'
import { addusers } from './UseReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function CreateUser() {

    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const  [email ,setEmail] = useState("")
    const navigate = useNavigate();

    

    const dispatch = useDispatch();
    const  userData = useSelector(state=>state.users);
    console.log(userData)

    const handleSubmit= (e)=>{
        e.preventDefault();
        // dispatch(addusers({id,name,email}))
        dispatch(addusers({id:userData[userData.length-1].id + 1,name,email}));
        navigate("/")
    }
  return (
    <div className='row text-start justify-content-center'>
        <div className='col-6'>
            <form className='container' onSubmit={handleSubmit}>
                <h2 className=' mt-3 text-center'>Add User</h2>
                <div className='col-12'>
                    <label className='form-label'>ID</label>
                    <input disabled="disabled" className='form-control'></input>
                </div>

                <div className='col-12'>
                    <label className='form-label'>Name</label>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}}className='form-control'></input>
                </div>

                <div className='col-12'>
                    <label className='form-label'>Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control'></input>
                </div>

                <div className='col-12'>
                   <button className='btn btn-success mt-3'>Save</button>
                   <button className='btn btn-dark ms-3 mt-3'>Back</button>
                </div>
            </form>
        </div>

     
    </div>
  )
}

export default CreateUser