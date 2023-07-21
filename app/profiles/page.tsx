import { redirect } from 'next/navigation';

import { User } from '@/types';
import getCurrentUser from '../actions/getCurrentUser';

import Avatar from '../components/Avatar';

export const revalidate = 0;

const ProfilePage = async () => {
    const user = (await getCurrentUser()) as User;

    if (!user) {
        return redirect('/');
    }

    return (
        <div className='flex flex-row items-center justify-center h-full'>
            <div className='flex flex-col'>
                <h1 className='text-3xl text-center text-white md:text-6xl'>
                    Who is watching?
                </h1>
                <div className='flex flex-row items-center justify-center gap-8 mt-10'>
                    <Avatar name={user?.name as string} />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;