'use client';

import { useState } from "react";
import Avatar from "../Avatar";
import { User } from "@prisma/client";

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser
}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log({ currentUser, }, 'TEST')

    return ( 
        <>
            <div>
                <nav className="flex items-center justify-between mx-12 mt-8">
                    <h2 className="text-4xl font-medium text-red-500">Stimeo</h2>
                    {/* Avatar */}
                    <div
                        onClick={() => setIsOpen(true)}
                        className="transition cursor-pointer hover:opacity-75">
                        <Avatar user={currentUser} />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default DesktopSidebar;