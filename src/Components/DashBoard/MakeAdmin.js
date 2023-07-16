import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
import { useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    const { isLoading, refetch } = useQuery('users', () => fetch('https://shounen-manufacturer-server.vercel.app/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => setUsers(data)))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            Users: {users.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Give Role</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;