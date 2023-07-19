"use client"

import { signOut } from "next-auth/react";

const People = () => {
    return (
        <div className="mt-12 text-center">
            <button onClick={() => signOut()} className="text-white">
                Logout
            </button>
        </div>
    );
}

export default People;