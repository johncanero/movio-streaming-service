"use client";
/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import Input from '@/app/components/Input';

export default function AuthForm() {
    // useState (name-email-password)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    // useCallback (toggleVariant - register)
    // toggleVariant
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    // register
    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            // login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password]);

    return (
        <div>
            <div>

                {/* Stimeo Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>

                {/* Auth Screen UI */}
                <div className="flex justify-center">
                    <div className="self-center w-full py-16 mt-2 bg-black rounded-md px-14 bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        {/* Auth Sign In - variant */}
                        <h2 className="mb-8 text-4xl font-semibold text-white">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>

                        {/* Auth Input (Input.tsx) */}
                        <div className="flex flex-col gap-4">
                            {/* name - variant - register */}
                            {variant === 'register' && (
                                <Input
                                    id="name"
                                    type="text"
                                    label="Username"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
                                />
                            )}
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

                        {/* button - variant - login - sign up */} 
                        <button onClick={register} className="w-full py-3 mt-10 text-white transition bg-red-600 rounded-md hover:bg-red-700">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>

                        {/* First time? - Create an account - toggleVariant  */}
                        <p className="mt-12 text-neutral-500">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="ml-1 text-white cursor-pointer hover:underline">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
