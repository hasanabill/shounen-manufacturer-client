import React from 'react';
import useTools from '../../Hooks/useTools';
import ToolCard from './ToolCard';

const Tools = () => {
    const [tools] = useTools()
    return (
        <div className='m-8'>
            <h2 className='text-center text-3xl font-bold'>Tools: {tools.length}</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    tools.slice(0, 6).map(tool => <ToolCard
                        key={tool._id}
                        tool={tool}
                    ></ToolCard>)
                }
            </div>
        </div>
    );
};

export default Tools;