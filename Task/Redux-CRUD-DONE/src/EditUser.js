import React, { useState } from 'react'
// import { editUser } from './UseReduce'
import { editUser } from './UseReducer';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'



function EditUser() {

    const {userid} = useParams();
    console.log(userid)



    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const  userData = useSelector(state=>state.users);
    console.log(userData)


const existingUser=userData.filter (user =>
       user.id == userid
    // console.log(user.id)
    )
    // console.log(existingUser)
    console.log(existingUser[0])


    
    const {name,email} = existingUser[0];
    console.log(name)
    const [uname,setuName] = useState(name)
    const  [uemail ,setuEmail] = useState(email)


    const handleSubmit= (e)=>{
        e.preventDefault();
        // dispatch(addusers({id,name,email}))
        dispatch(editUser({id:userid,name:uname,email:uemail}));
        // dispatch(editUsers({id:userid,name:uname,email:uemail}));
        navigate("/")
    }
  return (
    <div className='row text-start justify-content-center'>
        <div className='col-6'>
            <form className='container ' onSubmit={handleSubmit}>
                <h2 className=' mt-3 text-center'>Edit User</h2>
                <div className='col-12'>
                    <label className='form-label'>ID</label>
                    <input disabled="disabled" className='form-control'></input>
                </div>

                <div className='col-12'>
                    <label className='form-label'>Name</label>
                    <input value={uname} onChange={(e)=>{setuName(e.target.value)}} className='form-control'></input>
                </div>

                <div className='col-12'>
                    <label className='form-label'>Email</label>
                    <input value={uemail} onChange={(e)=>{setuEmail(e.target.value)}}  className='form-control'></input>
                </div>

                <div className='col-12'>
                   <button  className='btn btn-warning mt-3'>Save</button>
                   <button className='btn btn-dark ms-3 mt-3'>Back</button>
                </div>
            </form>
        </div>

     
    </div>
  )
}

export default EditUser