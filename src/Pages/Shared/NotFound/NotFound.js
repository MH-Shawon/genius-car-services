import React from 'react';
import lazyWorker from '../../../Images/lazy-workshop.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={lazyWorker} alt="" />
        </div>
    );
};

export default NotFound;