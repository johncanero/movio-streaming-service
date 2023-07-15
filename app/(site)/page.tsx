/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Input from '../components/Input'

export default function Home() {
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">

                {/* Stimeo Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                
                {/* Auth Screen UI */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        {/* Auth Sign In */}
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign In
                        </h2>
                        
                        {/* Auth Input */}
                        <div className="flex flex-col gap-4">
                            <Input />   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 