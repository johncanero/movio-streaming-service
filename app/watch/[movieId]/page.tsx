'use client';

import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams, useRouter } from 'next/navigation';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Movie } from '@/types';
import useMousePosition from '@/app/hooks/useMousePosition';
import useMovie from '@/app/hooks/useMovie';

const WatchPage = () => {
    const { movieId } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<ReactPlayer>(null);
    const router = useRouter();
    const mouseMoving = useMousePosition();

    const { movie }: { movie: Movie } = useMovie(movieId);

    useEffect(() => {
        setIsPlaying(true);

        return () => {
            setIsPlaying(false);
        };
    }, []);

    if (!movie) {
        return null;
    }

    return (
        <div className='w-screen h-screen bg-black group'>
            <nav
                className={`fixed w-full p-4 z-10 flex flex-row items-center gap-8 
        bg-black bg-opacity-70 transition duration-300 ease-in hover:opacity-100
        ${isPlaying
                        ? mouseMoving
                            ? 'opacity-100'
                            : 'opacity-0'
                        : 'opacity-100'
                    }`}
            >
                <AiOutlineArrowLeft
                    className='text-white cursor-pointer'
                    size={40}
                    onClick={() => router.push('/users')}
                />
                <p className='text-xl font-bold text-white md:text-3xl'>
                    <span className='font-light'>Watching: </span>
                    {movie.title}
                </p>
            </nav>
            <ReactPlayer
                className='react-player'
                ref={playerRef}
                url={movie.videoUrl}
                height={'100%'}
                width={'100%'}
                playing={isPlaying}
                controls={true}
                onPause={() => setIsPlaying(false)}
                onPlay={() => {
                    setIsPlaying(true);
                }}
            />
        </div>
    );
};

export default WatchPage;