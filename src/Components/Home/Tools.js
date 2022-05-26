import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools, setTools] = useState([])

    const { isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()).then(data => setTools(data)))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='m-8'>
            <h2 className='text-center text-3xl font-bold'>Tools: {tools.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools?.slice(0, 6).map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;