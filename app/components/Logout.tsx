"use client";

import { BsDoorOpen } from 'react-icons/bs';
import { signOut } from "next-auth/react";

const Logout = () => {
    return ( 
        <div className="flex items-center mt-12 text-center">
            <div className="m-auto">
                {/* <h2 className="mb-6 text-xl font-medium text-white">Users</h2> */}
                <button onClick={() => signOut()} className="text-4xl text-white">
                    <BsDoorOpen size={60} className='hover:text-neutral-600' />
                </button>
            </div>
        </div>
     );
}
 
export default Logout;