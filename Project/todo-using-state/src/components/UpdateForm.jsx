import React from 'react'

const UpdateForm = ({updateData,changeTask,updateTask,cancelUpdate}) => {
    return (

        <>
            <div className="row">
                <div className="col">
                    <input type="text" className='form-control form-control-lg' value={updateData && updateData.title} onChange={(e) => changeTask(e)} />
                </div>
                <div className="col-auto">
                    <button className='btn btn-lg btn-success me-4' onClick={updateTask} >Update</button>
                    <button className='btn btn-lg btn-danger' onClick={cancelUpdate}>Cancel</button>
                </div>
            </div>
        </>

    )
}

export default UpdateForm
