"use client";
import Logout from "../components/Logout";
import UserAccount from "./components/UserAccount";

// eslint-disable-next-line @next/next/no-async-client-component
const Profiles = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">

                {/* Who's watching? */}
                <h1 className="text-3xl text-center text-white md:text-6xl">Who&#39;s watching?</h1>
                <UserAccount />
                <Logout />
            </div>
        </div>
    );
}

export default Profiles;