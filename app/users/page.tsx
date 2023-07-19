"use client"

import { signOut } from "next-auth/react";

const Users = () => {
    return (
        <div className="mt-12 text-center">
            <button onClick={() => signOut()} className="text-white">
                Logout Button
            </button>
        </div>
    );
}

export default Users;