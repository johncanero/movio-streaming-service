'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface AvatarProps {
    name: string;
}

const Avatar = ({ name }: AvatarProps) => {
    const router = useRouter();
    return (
        <div
            className='flex flex-col mx-auto group w-44'
            onClick={() => router.push('/users')}
        >
            <div
                className='flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md h-44 w-44 group-hover:cursor-pointer group-hover:border-white'
            >
                <Image
                    src={'/images/default-red.png'}
                    alt='Profile'
                    height={500}
                    width={500}
                />
            </div>
            <div
                className='mt-4 text-2xl text-center text-gray-400 cursor-pointer group-hover:text-white'
            >
                {name}
            </div>
        </div>
    );
};

export default Avatar;