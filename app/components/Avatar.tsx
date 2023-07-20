'use client';

import { User } from "@prisma/client";

import useActiveList from "../hooks/useActiveList";
import Image from "next/image";

interface AvatarProps {
    user?: User;
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {
    const { members } = useActiveList();
    const isActive = members.indexOf(user?.email!) !== -1;

    return (
        <div className="relative">
            <div className="flex gap-2">
                <div className="relative inline-block w-10 h-10 overflow-hidden rounded-full md:h-12 md:w-12">
                    <Image
                        fill
                        src={user?.image || '/images/default-red.png'}
                        alt="Avatar"
                    />
                </div>

                <p className="mt-4 text-white">{user?.name}</p>
            </div>
            {isActive ? (
                <span
                    className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3"
                />
            ) : null}
        </div>
    );
}

export default Avatar;