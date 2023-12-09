import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

   const users =  useSelector(state =>state.users);
   console.log(users)
  return (
    <div>
        <div className='container'>
            
            <h2 className='my-3'>Users Data</h2>
            <button className='my-2 btn btn-info'>Add New (+)</button>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((items)=>(

                        <tr>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.email}</td>

                        <td>
                            <button className='btn btn-success me-2'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
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

