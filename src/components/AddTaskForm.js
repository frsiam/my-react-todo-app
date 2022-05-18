import React from 'react';

const AddTaskForm = () => {
    const handleTask = e => {
        e.preventDefault();
        const taskName = e.target.name.value;
        const taskDescription = e.target.description.value;
        console.log(taskName)
        console.log(taskDescription)
        e.target.reset();
    }
    return (
        <div className='max-w-sm mx-auto my-10'>
            <form onSubmit={handleTask}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Task Description</label>
                    <input name='description' type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button className="btn btn-primary">Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskForm;