import React from 'react';
import SingleTodo from './SingleTodo';

const AllTodos = ({ datas }) => {
    return (
        <div className='container'>
            <table class="table shadow table-striped">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {
                        datas.map(data => <SingleTodo key={data._id} data={data} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllTodos;