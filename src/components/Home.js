import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import AllTodos from './AllTodos';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const Home = () => {
    const [todos, setTodos] = useState([])

    const handleNewTodo = (todo) => {
        setTodos((previousTodo) => {
            return [...previousTodo, { _id: uuidv4(), todo }]
        })
    }

    const handleDeleteTodo = (id) => {
        setTodos((previous) => {
            const remainingTodos = previous.filter(todo => todo._id !== id)
            toast('Deleted the task you want')
            return remainingTodos;
        })
    }
    return (
        <div className='container'>
            <h1 className="text-center text-3xl fw-bolder text-primary p-3 mt-1 container rounded-pill shadow w-3/4 md:w-1/2">MY TO DO APP</h1>
            <AddTaskForm handleNewTodo={handleNewTodo} />
            <AllTodos handleDeleteTodo={handleDeleteTodo} todos={todos} />
        </div>
    );
};

export default Home;