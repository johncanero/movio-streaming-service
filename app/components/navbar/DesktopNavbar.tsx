'use client';

import { useState } from "react";
import Avatar from "../Avatar";
import { User } from "@prisma/client";

interface DesktopNavbarProps {
    currentUser: User
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
    currentUser
}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log({ currentUser, }, 'TEST')

    return ( 
        <>
            <div>
                <nav className="flex items-center justify-between mx-12 mt-8">
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

export default DesktopNavbar;