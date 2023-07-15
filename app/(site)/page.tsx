"use client";

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useCallback, useState } from 'react';

import Input from '../components/Input'

export default function Home() {
    const [email, setEmail] = useState('');
    
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full bg-black lg:bg-opacity-50">

                {/* Stimeo Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                
                {/* Auth Screen UI */}
                <div className="flex justify-center">
                    <div className="self-center w-full px-16 py-16 mt-2 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        {/* Auth Sign In */}
                        <h2 className="mb-8 text-4xl font-semibold text-white">
                            Sign In
                        </h2>
                        
                        {/* Auth Input */}
                        <div className="flex flex-col gap-4">
                            <Input 
                                id="email"
                                type="email"
                                label="Email address or phone number"
                                value=""
                                onChange={() => {}} 
                             />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 