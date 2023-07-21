'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import NavbarItem from './NavbarItem';

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);


    return (
        <nav className='fixed z-20 w-full'>
            <div className={`relative  transition duration-500 ${showBackground ? 'bg-zinc-900/90' : ''} h-28 md:h-auto`}>
                <div className='flex flex-row items-center px-4 py-6 md:px-10'>
                    <div className='flex md:hidden'>
                        <Image
                            className='object-contain w-auto h-10'
                            src={'/images/logo-letter.png'}
                            alt='logo'
                            height={50}
                            width={50}
                            quality={100}
                        />
                    </div>
                    <div className='hidden md:flex'>
                        <Image
                            className='object-contain w-[50px] md:w-[100px] h-auto'
                            src={'/images/logo.png'}
                            alt='logo'
                            height={100}
                            width={100}
                            quality={100}
                        />
                    </div>


                    {/* Larger Screens */}
                    <div className='flex-row hidden ml-8 lg:flex gap-7'>
                        <NavbarItem label='Home' />
                        <NavbarItem label='TV Series' />
                        <NavbarItem label='Movies' />
                        <NavbarItem label='New & Popular' />
                        <NavbarItem label='My List' />
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;