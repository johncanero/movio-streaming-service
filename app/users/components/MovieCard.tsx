'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Movie } from '@/types';
import useInfoModal from '@/app/hooks/useInfoModal';

import FavoriteButton from '@/app/components/buttons/FavoriteButton';
import PlayIcon from '@/app/components/icon-buttons/PlayIcon';
import MoreIcon from '@/app/components/icon-buttons/MoreIcon';


interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const { onOpen } = useInfoModal();

    const animate = isHovered ? 'open' : 'closed';

    const variants = {
        open: { opacity: 1, y: 0, scale: 1 },
        closed: { opacity: 0, y: '100%', scale: 1 },
    };

    const transition = {
        duration: 0.25,
        delay: 0.1,
    };

    return (
        <div
            onClick={() => onOpen(movie.id)}
            className='group col-span relative h-[25vw] md:h-[18vw] lg:h-[13vw] 2xl:h-[9vw] 
      sm:hover:scale-[115%] sm:hover:translate-x-6 transition duration-300 cursor-pointer
      hover:z-20'
        >
            <Image
                className='object-cover w-full h-full transition rounded-md shadow-xl duration'
                src={movie.thumbnailUrl}
                alt='Thumbnail'
                fill
                sizes='100vw'
            />

            {/* Hover Div */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='absolute top-0 left-0 flex-col justify-end hidden w-full h-full px-2 pb-2 rounded-md sm:flex'
            >
                <motion.div
                    initial='closed'
                    animate={animate}
                    variants={variants}
                    transition={transition}
                    className='flex flex-row items-center justify-start gap-x-2 lg:gap-3'
                >
                    <PlayIcon movieId={movie.id} />
                    <FavoriteButton movieId={movie.id} />
                    <MoreIcon movieId={movie.id} onOpen={onOpen} />
                </motion.div>
                <motion.p
                    initial='closed'
                    animate={animate}
                    variants={variants}
                    transition={transition}
                    className='text-lg font-bold text-white truncate'
                >
                    {movie.title}
                </motion.p>
                <motion.p
                    initial='closed'
                    animate={animate}
                    variants={variants}
                    transition={transition}
                    className='text-xs font-semibold text-white truncate'
                >
                    {movie.genre}
                </motion.p>
            </div>
        </div>
    );
};

export default MovieCard;