/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ButtonUser from "@/app/components/ButtonUser";

export default function UserAccount() {
    const session = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // handleSubmit
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
        router.push('/users');
    }


    return (
        <div className="text-white text-center mt-6">
            <form
                className="flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <ButtonUser disabled={isLoading} fullWidth type="submit">
                        <div className="flex-row mx-auto group w-44">
                            {/* default-image */}
                            <div className="flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
                                <img src="/images/default-blue.png" alt="Profile" />
                            </div>

                            {/* data.name */}
                            <div className="relative flex items-center justify-center transition rounded-lg cursor-pointer">
                                <p className="mt-4 text-xl text-center text-gray-400 group-hover:text-white">
                                    user?.name
                                </p>
                            </div>
                        </div>
                    </ButtonUser>
                </div>
            </form>
        </div>
    )

}
