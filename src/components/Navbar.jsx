"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {
        data: session,
    } = authClient.useSession();
    const user = session?.user;
    const handleSignOut =async()=>{
        await authClient.signOut();
    }
    return (
        <nav className='p-5 flex justify-between bg-white items-center'>
            <ul className='flex gap-3'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul>

            <div>
                <Image src={'/assets/wanderlast.png'} width={150} height={150} alt='wanderlat' />
            </div>

            <ul className='flex items-center gap-3'>
                <li><Link href={'/profile'}>Profile</Link></li>
                {user ? <>
                    <li>
                        <Avatar>
                            <Avatar.Image referrerPolicy='no-referrer' alt="John Doe" src={user?.image} />
                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li>
                        <Button onClick={handleSignOut} variant='danger' className={'rounded-none'}>Logout</Button>
                    </li>
                </>
                    : <>
                        <li><Link href={'/login'}>Login</Link></li>
                        <li><Link href={'signup'}>Sign up</Link></li>
                    </>}
            </ul>
        </nav>
    );
};

export default Navbar;