"use client"
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";

import { BsDoorOpen } from 'react-icons/bs';
import { signOut } from "next-auth/react";
// getServerSideProps
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return { 
        props: {}
    }
}


const Profiles = () => {
    return ( 
        <div className="flex items-center h-screen text-center">
            <div className="m-auto">
                <h2 className="mb-6 text-xl font-medium text-white">Profiles</h2>
                <button onClick={() => signOut()} className="text-4xl text-white">
                    <BsDoorOpen size={80} className='hover:text-neutral-600' />
                </button>
            </div>
        </div>
     );
}
 
export default Profiles;