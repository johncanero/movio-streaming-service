'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';
import { BsSearch, BsBell } from 'react-icons/bs';

import useMobileMenuModal from '@/app/hooks/useMobileMenuModal';
import useMediaQuery from '@/app/hooks/useMediaQuery';

import NavbarItem from './NavbarItem';
import MobileMenuModal from '../modals/MobileMenuModal';
import MobileMenu from '../MobileMenu';

const Navbar = () => {
    const isLargeScreens = useMediaQuery('(max-width: 1023px)');
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    // const [showMobileMenu, setShowMobileMenu] = useState(false);

    const { onOpen } = useMobileMenuModal();

    const openMobileMenu = () => {
        onOpen();
    };

    // const toggleMobileMenu = useCallback(() => {
    //     setShowMobileMenu((current) => !current);
    // }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
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
                        <MobileMenuModal />
                    </div>

                    {/* End of Navbar */}
                    <div className='flex flex-row items-center ml-auto gap-7'>
                        <div className='text-gray-200 transition cursor-pointer hover:opacity-70'>
                            <BsSearch size={20} />
                        </div>
                        <div className='text-gray-200 transition cursor-pointer hover:opacity-70'>
                            <BsBell size={20} />
                        </div>

                        <div
                            onClick={toggleAccountMenu}
                            className='relative flex flex-row items-center gap-3 cursor-pointer'
                        >
                            <div className='w-6 h-6 overflow-hidden rounded-md lg:w-10 lg:h-10'>
                                <Image
                                    src={'/images/default-red.png'}
                                    alt='Profile'
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <BsChevronDown
                                size={isLargeScreens ? 12 : 16}
                                className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'
                                    }`}
                            />
                            {/* <AccountMenu visible={showAccountMenu} /> */}
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;