'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { PiSignOutBold } from 'react-icons/pi';
import { AiOutlineUserSwitch } from 'react-icons/ai';

import useCurrentUser from '../hooks/useCurrentUser';

interface AccountMenuProps {
    visible?: boolean;
}

const AccountMenu = ({ visible }: AccountMenuProps) => {
    const router = useRouter();
    const { user } = useCurrentUser();

    if (!visible) {
        return null;
    }

    return (
        <div
            className='absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 rounded-lg top-14'
        >
            <div className='flex flex-col gap-3'>
                <div
                    className='flex flex-row items-center w-full gap-3 px-5 group/item'
                >
                    <Image
                        className='w-8 rounded-full'
                        src={user?.image || '/images/default-red.png'}
                        alt='Profile'
                        height={100}
                        width={100}
                    />
                    <p className='text-sm text-white group-hover/item:underline'>
                        {user?.name}
                    </p>
                </div>
                <div
                    onClick={() => router.push('/profiles')}
                    className='flex flex-row px-5 pt-4 gap-x-2 group/item'
                >
                    <AiOutlineUserSwitch size={24} className='text-white' />
                    <p
                        className='text-sm leading-6 text-white hover:underline group-hover/item:underline'
                    >
                        Switch Profiles
                    </p>
                </div>
                <hr className='h-px my-4 bg-gray-600 border-0' />
                <div
                    onClick={() => signOut()}
                    className='flex flex-row px-5 gap-x-2 group/item'
                >
                    <PiSignOutBold className='text-white' size={24} />
                    <p
                        className='text-sm leading-6 text-white hover:underline group-hover/item:underline'
                    >
                        Sign out of Netflix
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccountMenu;