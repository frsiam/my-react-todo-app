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
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Task Name' />
                </div>
                <div className="mb-3">
                    <textarea name='description' type="text" className="form-control" id="exampleInputPassword1" placeholder='Task Description' rows='2'></textarea>
                </div>
                <button className="btn btn-dark w-full">Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskForm;