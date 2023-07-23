'use client';

import useMediaQuery from '@/app/hooks/useMediaQuery';

import { BsChevronDown } from 'react-icons/bs';

interface MoreIconProps {
    movieId: string;
    onOpen: (id: string) => void;
}

const MoreIcon = ({ movieId, onOpen }: MoreIconProps) => {
    const isMediumScreens = useMediaQuery('(max-width: 1023px)');

    return (
        <div
            onClick={() => onOpen(movieId)}
            className='flex items-center justify-center w-8 h-8 transition bg-transparent border-2 border-white rounded-full cursor-pointer group/item hover:bg-white duration'
        >
            <BsChevronDown
                className='text-white transition group-hover/item:text-black duration'
                size={isMediumScreens ? 20 : 25}
            />
        </div>
    );
};

export default MoreIcon;