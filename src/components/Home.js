import React from 'react';
import AddTaskForm from './AddTaskForm';
import AllTodos from './AllTodos';

const Home = () => {
    const fakeData = [
        { _id: 1, name: 'Fozor Salat', desc: 'Most Valuable task in this world' },
        { _id: 2, name: 'Duhor Salat', desc: 'Most Valuable task in this world' },
        { _id: 3, name: 'Asor Salat', desc: 'Most Valuable task in this world' }
    ]
    return (
        <div className='container'>
            <h1 className="text-center text-3xl fw-bolder text-primary p-3 mt-1 container rounded-pill shadow w-3/4 md:w-1/2">MY TO DO APP</h1>
            <AddTaskForm />
            <AllTodos datas={fakeData} />
        </div>
    );
};

export default Home;