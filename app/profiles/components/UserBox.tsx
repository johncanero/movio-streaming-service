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
            <div className="relative flex items-center justify-center text-white transition rounded-lg cursor-pointer">
                <p className="text-lg font-medium text-center text-white">
                    {data.name}
                </p>
            </div>
        </div>
    );
}

export default UserBox;