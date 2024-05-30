import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const singleUser = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h4>User Name: {singleUser.name}</h4>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;