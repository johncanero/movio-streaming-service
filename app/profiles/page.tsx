/* eslint-disable @next/next/no-img-element */
import getUsers from "../actions/getUsers";
import Logout from "../components/Logout";
// Profiles
import UserList from "./components/UserList";

// eslint-disable-next-line @next/next/no-async-client-component
const Profiles = async () => {
    const users = await getUsers();
    return ( 
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
                
                {/* Who's watching? */}
                <h1 className="text-3xl text-center text-white md:text-6xl">Who&#39;s watching?</h1>

                {/* Default Image */}
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div>
                        <div className="flex-row mx-auto group w-44">
                            <div className="flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
                                <img src="/images/default-blue.png" alt="Profile" />
                            </div>

                            {/* UserList */}
                            <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white">
                                <UserList items={users} />
                            </div>
                        </div>
                    </div>
                </div>

                <Logout />
            </div>
        </div>
     );
}
 
export default Profiles;