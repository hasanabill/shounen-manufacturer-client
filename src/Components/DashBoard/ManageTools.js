import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import ToolRow from './ToolRow';
import { useQuery } from 'react-query';

const ManageTools = () => {
    const [tools, setTools] = useState([])

    const { isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()).then(data => setTools(data)))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>Name: {tools.length}</th>
                            <th>Stock</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <ToolRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                            ></ToolRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageTools;