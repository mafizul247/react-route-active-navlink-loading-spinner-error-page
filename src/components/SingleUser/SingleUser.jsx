import React from 'react';
import { Link } from 'react-router-dom';
import './SingleUser.css'

const SingleUser = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/userDetails/${id}`}>See Details User</Link>
        </div>
    );
};

export default SingleUser;