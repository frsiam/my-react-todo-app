import React from 'react';
import SingleTodo from './SingleTodo';

const AllTodos = ({ todos, handleDeleteTodo }) => {
    return (
        <div className='container max-w-6xl'>
            <table class="table shadow table-striped">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {
                        todos.map((data, index) => <SingleTodo handleDeleteTodo={handleDeleteTodo} key={data._id} data={data.todo} id={data._id} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllTodos;