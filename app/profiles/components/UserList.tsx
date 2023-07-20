'use client';


import { User } from "@prisma/client";
import UserBox from "./UserBox";


interface UserListProps {
    items: User[];
}

const UserList: React.FC<UserListProps> = ({
    items,
}) => {
    return (
        <div>
            {items.map((item) => (
                    <UserBox
                        key={item.id}
                        data={item}
                    />
                ))}
        </div>
    );
}

export default UserList;