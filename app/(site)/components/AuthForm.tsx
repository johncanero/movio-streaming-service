"use client";
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from "react-hot-toast";
import { BsGithub, BsGoogle } from 'react-icons/bs';

import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/inputs/Button';
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

export default function AuthForm() {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    // onSubmit
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            axios.post('/api/register', data)
             
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }


        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false
            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok) {
                        toast.success('Logged In!');
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials!');
                }

                if (callback?.ok) {
                    toast.success('Logged In!');
                }
            })
             toast.success('Logged In!');
    }

    return (
        <div>
            <div>
                {/* Auth Screen UI */}
                <div className="flex justify-center">
                    <div className="self-center w-full py-16 mt-2 bg-black rounded-md px-14 bg-opacity-70 lg:w-2/5 lg:max-w-md">
                        {/* Auth Sign In - variant */}
                        <h2 className="mb-8 text-4xl font-semibold text-white">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </h2>

                        {/* Auth Input and Button */}
                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit(onSubmit)}>

                            {variant === 'REGISTER' && (
                                <Input
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="name"
                                    label="Name"
                                />
                            )}
                            <Input
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="email"
                                label="Email address"
                                type="email"
                            />
                            <Input
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="password"
                                label="Password"
                                type="password"
                            />

                            <div>
                                <Button disabled={isLoading} fullWidth type="submit">
                                    {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                                </Button>
                            </div>
                        </form>

                        <div className='mt-6'>
                            <div className="relative">
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-6">
                                <AuthSocialButton
                                    icon={BsGithub}
                                    onClick={() => socialAction('github')}
                                />
                                <AuthSocialButton
                                    icon={BsGoogle}
                                    onClick={() => socialAction('google')}
                                />
                            </div>
                        </div>

                        {/* Login to Register */}
                        <div className="flex justify-center gap-2 px-1 mt-6 text-gray-500 ">
                            <div>
                                {variant === 'LOGIN' ? 'First time using Netflix?' : 'Already have an account?'}
                            </div>
                            <div
                                onClick={toggleVariant}
                                className="text-white cursor-pointer hover:underline"
                            >
                                {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
