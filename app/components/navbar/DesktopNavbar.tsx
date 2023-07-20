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
                <nav className="flex items-center justify-center mt-6">
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