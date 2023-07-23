'use client';

import { useRouter } from 'next/navigation';

import useMediaQuery from '@/app/hooks/useMediaQuery';

import { BsFillPlayFill } from 'react-icons/bs';

interface PlayIconProps {
    movieId: string;
}

const PlayIcon = ({ movieId }: PlayIconProps) => {
    const isMediumScreens = useMediaQuery('(max-width: 1023px)');
    const router = useRouter();

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                router.push(`/watch/${movieId}`);
            }}
            className='flex items-center justify-center w-8 h-8 transition bg-white rounded-full cursor-pointer hover:bg-neutral-300'
        >
            <BsFillPlayFill size={isMediumScreens ? 25 : 30} />
        </div>
    );
};

export default PlayIcon;