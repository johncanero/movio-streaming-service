'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';

import useMobileMenuModal from '@/app/hooks/useMobileMenuModal'; 
import NavbarItem from './NavbarItem';
import MobileMenu from '../MobileMenu';
import MobileMenuModal from '../modals/MobileMenuModal';

const Navbar = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const { onOpen } = useMobileMenuModal();

    const openMobileMenu = () => {
        onOpen();
    };

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    
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

                    {/* Smaller Screens */}
                    <div
                        // onClick={toggleMobileMenu} 
                        onClick={openMobileMenu}
                        className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden">
                        <p className='text-base text-white drop-shadow-2xl'>Browse</p>
                        <div className='flex items-center'>
                            <BsChevronDown size={15} className='text-white transition' />
                        </div>
                        {/* <MobileMenu visible={showMobileMenu} /> */}
                        <MobileMenuModal />s
                    </div>


                </div>
            </div>
        </nav>
    );
}

export default Navbar;