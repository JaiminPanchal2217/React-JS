import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Home() {

   const usersData= useSelector(state => state.users);
   console.log(usersData)
  return (
    <div>

        <div className='container'>

        <h2 className='my-4'>User Data</h2>
        <Link to="/create" className='btn btn-info my-2'>Add New (+)</Link>
        <table className='table'>
            <thead className=' table-dark'>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>

            <tbody>

                {usersData.map((itmes)=>(

<tr>
<td>{itmes.id}</td>
<td>{itmes.name}</td>
<td>{itmes.email}</td>
<td>
<button className='btn btn-success me-2'>Edit</button>

<button className='btn btn-danger me-2'>Delete</button>
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


