import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";

interface UserBoxProps {
    data: User
}

const UserBox: React.FC<UserBoxProps> = ({
    data
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <div className="relative flex items-center justify-center transition rounded-lg cursor-pointer">
                <p className="mt-4 text-xl text-center text-gray-400 group-hover:text-white">
                    {data.name}
                </p>
            </div>
        </div>
    );
}

export default UserBox;