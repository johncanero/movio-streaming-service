/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from "@/app/components/Button";

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
                    <Button disabled={isLoading} fullWidth type="submit">
                        Submit
                    </Button>
                </div>
            </form>
            
        </div>
    )

}
