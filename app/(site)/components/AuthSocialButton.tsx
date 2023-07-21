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
            className="inline-flex justify-center w-full px-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-0 hover:bg-neutral-200 focus:outline-offset-0 invalid:border-b-1"
        >
            <Icon size={24} />
        </button>
    );
}

export default AuthSocialButton;