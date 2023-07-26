"use client";
/* eslint-disable @next/next/no-img-element */
import AuthForm from "./components/AuthForm"

export default function Home() {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* AuthForm */}
            <div className="w-full h-full bg-black lg:bg-opacity-50">
                {/* Netflix Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                <AuthForm />
            </div>
        </div>
    )
}
