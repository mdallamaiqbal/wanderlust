import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const Destinations =async () => {
    const res =await fetch('http://localhost:5000/destination')
    const destination = await res.json();
    console.log(destination)
    return (
        <div className='max-w-7xl mx-auto'>
           <h1>All Destination</h1>
           <div className='grid grid-cols-4 gap-5'>
            {
                destination.map(des => <DestinationCard  key={des._id} des={des} />)
            }
           </div>
        </div>
    );
};

export default Destinations;