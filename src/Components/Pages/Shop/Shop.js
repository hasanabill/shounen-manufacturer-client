import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ToolCard from './../../Home/ToolCard';

const Shop = () => {
    const [tools, setTools] = useState([])

    const { isLoading } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()).then(data => setTools(data)))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:mx-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools?.map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Shop;