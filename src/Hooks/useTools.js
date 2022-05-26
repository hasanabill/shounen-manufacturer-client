import { useQuery } from 'react-query';
import { useState } from 'react';


const useTools = () => {
    const [tools, setTools] = useState([])

    const { isLoading, refetch } = useQuery('tools', () => fetch('http://localhost:5000/tools').then(res => res.json()).then(data => setTools(data)))

    return [tools, isLoading, refetch];
};

export default useTools;