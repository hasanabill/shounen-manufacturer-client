import React from 'react';
import error from '../../assets/images/error-404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img className='lg:h-96' src={error} alt="" />
        </div>
    );
};

export default NotFound;