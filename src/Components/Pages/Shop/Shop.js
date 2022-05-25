import React from 'react';
import useTools from '../../../Hooks/useTools';
import Loading from '../../Shared/Loading';
import ToolCard from './../../Home/ToolCard';

const Shop = () => {
    const [tools, isLoading] = useTools()
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:mx-12'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    tools.map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Shop;