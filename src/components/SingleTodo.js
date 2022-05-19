import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify';

const SingleTodo = ({ data, index, id, handleDeleteTodo }) => {
    const { name, desc } = data;

    const [style, setStyle] = useState('');

    const handleDelete = (id) => {
        handleDeleteTodo(id)
    }

    const handleDone = (id) => {
        setStyle('line-through')
        toast('Your Task is Completed')
    }
    return (
        <>
            <tr style={{ textDecoration: `${style}` }}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{desc}</td>
                <td>
                    <button onClick={() => handleDone(id)} className="btn btn-success mr-4">Complete</button>
                    <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete <TrashIcon className='w-6 d-inline'></TrashIcon></button>
                </td>
            </tr>

        </>
    );
};

export default SingleTodo;