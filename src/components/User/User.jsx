import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Total Users {users.length}</h2>
            <div>
                {
                    users?.map(user => <SingleUser key={user.id} user={user} /> )
                }
            </div>
        </div>
    );
};

export default User;