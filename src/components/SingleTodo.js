import React from 'react';

const SingleTodo = ({ data }) => {
    const { name, desc } = data;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default SingleTodo;