/* eslint-disable @next/next/no-img-element */
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
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                
                {/* Who's watching? */}
                <h1 className="text-3xl text-center text-white md:text-6xl">Who&#39;s watching?</h1>

                {/* Default Image */}
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => {}}>

                        <div className="flex-row mx-auto group w-44">
                            <div className="flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
                                <img src="/images/default-blue.png" alt="Profile" />
                            </div>

                            <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white">
                                Name
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Profiles;