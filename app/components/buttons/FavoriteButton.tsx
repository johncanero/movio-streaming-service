'use client';

import axios from 'axios';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
import { toast } from 'react-hot-toast';

import useFavorites from '@/app/hooks/useFavorites';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import useCurrentUser from '@/app/hooks/useCurrentUser';

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton = ({ movieId }: FavoriteButtonProps) => {
    const isMediumScreens = useMediaQuery('(max-width: 1023px)');
    const router = useRouter();

    const { mutate: mutateFavorites } = useFavorites();
    const { user: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavorite = async () => {
        let response;

        if (isFavorite) {
            response = await axios.delete('/api/favorite', { data: { movieId } });
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }

        if (response.status === 200) {
            if (!isFavorite) toast.success('Added to Favorites', { id: 'Favorite' });
            const updatedFavoriteIds = response?.data?.favoriteIds;

            mutate({
                ...currentUser,
                favoriteIds: updatedFavoriteIds,
            });

            mutateFavorites();
        }
        router.refresh();
    };

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <div
            className='flex items-center justify-center w-8 h-8 transition bg-transparent border-2 border-white rounded-full cursor-pointer group/item duration hover:bg-white'
            onClick={(e) => {
                e.stopPropagation();
                toggleFavorite();
            }}
        >
            <Icon
                className='text-white transition group-hover/item:text-black duration'
                size={isMediumScreens ? 20 : 25}
            />
        </div>
    );
};

export default FavoriteButton;