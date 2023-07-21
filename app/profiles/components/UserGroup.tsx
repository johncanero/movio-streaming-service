/* eslint-disable @next/next/no-img-element */

import getUsers from "@/app/actions/getUsers";
import UserList from "./UserList";

const UserGroup = async () => {
    const users = await getUsers();

    return ( 
        <div>
            {/* UserCardFile */}
            <div className="flex-row mx-auto group w-44">
                <div className="flex items-center justify-center overflow-hidden border-2 border-transparent rounded-md w-44 h-44 group-hover:cursor-pointer group-hover:border-white">
                    <img src="/images/default-blue.png" alt="Profile" />
                </div>

                {/* UserList */}
                <div>
                    <UserList items={users} />
                </div>
            </div>
        </div>
     );
}
 
export default UserGroup;