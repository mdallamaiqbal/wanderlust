import { BookingDeleteAlert } from '@/components/BookingDeleteAlert';
import { auth } from '@/lib/auth';
import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage =async() => {
    const session = await auth.api.getSession({
    headers: await headers() 
});

      const {token} = await auth.api.getToken({
          headers: await headers()
      });
     
   const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const bookings =await res.json();
   
    return (
        <div className='max-w-7xl mx-auto'>
           <h1 className='text-3xl font-bold'>My Bookings</h1>
           <div className='space-y-5'>
             {
                bookings.map(booking=> <div className='flex gap-5 border min-w-3xl p-5' key={booking._id}>
                     <Image src={booking.imageUrl} alt={booking.destinationName}
                      width={200}
                      height={200}
                     />
                     <div>
                        <h1 className='font-bold text-2xl'>{booking.destinationName}</h1>
                         <p>{new Date(booking.departureDate).toLocaleDateString(
                             "en-us",{
                               year: "numeric",
                               month:"long",
                               day:"numeric"
                            }
                         )}</p>
                         <p className='text-3xl font-bold text-cyan-500'>${booking.price}</p>
                         <p>Booking Id: {booking._id}</p>
                     <BookingDeleteAlert bookingId={booking._id} />
                     </div>
                     
                     </div> )
             }
           </div>
        </div>
    );
};

export default MyBookingsPage;