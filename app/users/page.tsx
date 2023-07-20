"use client"

import { signOut } from "next-auth/react";
const Users = () => {
    return (
        <div className="mt-12 text-center">
            <h1 className="text-red-500 ">Stimeo</h1>
            <button onClick={() => signOut()} className="text-4xl text-white">
                Logout Button
            </button>
        </div>
    );
}

export default Users; 