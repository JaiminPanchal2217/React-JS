import React from 'react'

const AddTaskForm = ({newTask, setNewTask, Addtask }) => {
    return (
        <>
            <div className='row'>
                <div className="col">
                    <input type="text" className='form-control-lg form-control'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </div>
                <div className="col-auto">
                    <button className='btn btn-success btn-lg' onClick={Addtask}>Add Task</button>
                </div>
            </div>
        </>
    )
}

export default AddTaskForm
