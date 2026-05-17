import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({des}) => {
    const {_id,imageUrl,price,destinationName,duration,country} = des;

    return (
        <div className='border'>
            <Image src={imageUrl} className='h-56' height={400} width={400} alt={destinationName}/>
           <div className='p-2'>
             <div >
               <div className='flex items-center gap-2'> <LuMapPin /> <span>{country}</span></div>
            </div>
            <div>
                <h2 className='text-xl font-bold'>{destinationName}</h2>
            </div>
            <div className='flex justify-between'>
                 <div className='flex gap-2 items-center'>
               <FaRegCalendar /> {duration}
            </div>
             <div className='text-xl font-bold'><h3>${price}</h3></div>
            </div>
            <Link href={`/destinations/${_id}`}><Button variant='ghost' className={'mt-1 text-cyan-500'}>
              <FiExternalLink />   Book Now</Button></Link>
           </div>
           
        </div>
    );
};

export default DestinationCard;