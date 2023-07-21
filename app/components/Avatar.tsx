'use client';

import { User } from "@prisma/client";
import Image from "next/image";
interface AvatarProps {
    user?: User;
};

const Avatar: React.FC<AvatarProps> = ({ user }) => {
    return (
        <div className="relative">
            <div className="flex gap-2">
                {/* Image and Name */}
                <div className="relative inline-block w-10 h-10 overflow-hidden rounded-full md:h-12 md:w-12">
                    <Image
                        fill
                        src={user?.image || '/images/default-red.png'}
                        alt="Avatar"
                    />
                </div>
                <p className="mt-4 text-white">{user?.name}</p>
            </div>
        </div>
    );
}

export default Avatar;