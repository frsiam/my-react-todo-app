import React, { useState } from 'react';

const AddTaskForm = ({ handleNewTodo }) => {
    const [todo, setTodo] = useState({ name: '', desc: '' });
    const { name, desc } = todo;

    const handleChange = e => {
        const name = e.target.name;
        setTodo((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value };
        })
    }
    const handleTask = e => {
        e.preventDefault();
        // const taskName = e.target.name.value;
        // const taskDescription = e.target.description.value;
        // console.log(taskName)
        // console.log(taskDescription)
        handleNewTodo(todo)
        setTodo({ name: '', desc: '' })
    }
    return (
        <div className='max-w-sm mx-auto my-10'>
            <form onSubmit={handleTask}>
                <div className="mb-3">
                    <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Task Name' value={name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <textarea name='desc' type="text" className="form-control" id="exampleInputPassword1" placeholder='Task Description' rows='2' value={desc} onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-dark w-full">Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskForm;