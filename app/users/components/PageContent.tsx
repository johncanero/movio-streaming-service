'use client';

import { useState, useEffect } from 'react';

import { Movie } from '@/types';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import MovieList from './MovieList';

interface PageContentProps {
    movies: Movie[];
    count: number;
    favoriteMovies: Movie[];
    favoriteCount: number;
}

const PageContent = ({
    movies,
    count,
    favoriteMovies,
    favoriteCount,
}: PageContentProps) => {
    const isSmallScreens = useMediaQuery('(max-width: 767px)');
    const isMediumScreens = useMediaQuery('(max-width: 1023px)');
    const isLargeScreens = useMediaQuery('(max-width: 1535px)');

    const [numberOfMovies, setNumberOfMovies] = useState(6);

    // When MediaQueries Changes
    useEffect(() => {
        if (isSmallScreens) {
            setNumberOfMovies(2);
        } else if (isMediumScreens && !isSmallScreens) {
            setNumberOfMovies(3);
        } else if (isLargeScreens && !isMediumScreens && !isSmallScreens) {
            setNumberOfMovies(4);
        } else {
            setNumberOfMovies(6);
        }
    }, [isLargeScreens, isMediumScreens, isSmallScreens, numberOfMovies]);

    return (
        <div className='flex flex-col pt-4 pb-40 gap-y-12 shadow-inner-upper-2xl'>
            <MovieList
                title='Trending Now'
                movies={movies}
                count={count}
                rowSize={numberOfMovies}
            />

            {favoriteCount > 0 && (
                <MovieList
                    title='My List'
                    movies={favoriteMovies}
                    count={favoriteCount}
                    rowSize={numberOfMovies}
                />
            )}
        </div>
    );
};

export default PageContent;