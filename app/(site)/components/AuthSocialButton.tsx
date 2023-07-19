import { IconType } from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="inline-flex justify-center w-full px-4 py-2 text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-0 bg-neutral-700 hover:bg-neutral-600 focus:outline-offset-0 invalid:border-b-1"
        >
            <Icon />
        </button>
    );
}

export default AuthSocialButton;