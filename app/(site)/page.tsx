"use client";

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useCallback, useState } from 'react';

import Input from '../components/Input'

export default function Home() {
    // useState (name-email-password)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="w-full h-full bg-black lg:bg-opacity-50">

                {/* Stimeo Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>

                {/* Auth Screen UI */}
                <div className="flex justify-center">
                    <div className="self-center w-full py-16 mt-2 bg-black rounded-md px-14 bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        {/* Auth Sign In */}
                        <h2 className="mb-8 text-4xl font-semibold text-white">
                            Sign In
                        </h2>

                        {/* Auth Input */}
                        <div className="flex flex-col gap-4">
                            {/* name */}
                            <Input
                                id="name"
                                type="text"
                                label="Username"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                            />
                            {/* email */}
                            <Input
                                id="email"
                                type="email"
                                label="Email address or phone number"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                            />
                            {/* password */}
                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Button */}
                        <button className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
                            Login
                        </button>

                        {/* First time? - Create an account  */}
                        <p className="mt-12 text-neutral-500">
                            First time using Stimeo?
                            <span className="ml-1 text-white cursor-pointer hover:underline">
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
