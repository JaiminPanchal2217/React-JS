import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UseReducer';

function Home() {


    const  users = useSelector(state=>state.users);
    console.log(users)

    const dispatch =useDispatch();


    const LoadDelete =(id)=>{
      dispatch(deleteUser({id:id}))

    }




  return (
    <div>

        <div className='container'>
            <h2 className='my-3'>User Data</h2>
          <Link to= "/create"className='btn btn-info my-2'>ADD NEW (+) </Link>
          <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>

                {users.map((items)=>(
                <tr key={items}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    {/* <td>{items.phone}</td> */}
                  <td>
                    <Link to ={`/edit/${items.id}`}className='btn btn-success me-2'>EDIT</Link>
                    <button onClick={()=>{LoadDelete(items.id)}} className='btn btn-danger me-2'>DELTE</button>
                  </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default Home