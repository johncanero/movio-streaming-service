interface NavbarItemProps {
    label: string;
}

const NavbarItem = ({ label }: NavbarItemProps) => {
    return (
        <p className='text-white transition cursor-pointer hover:opacity-70'>
            {label}
        </p>
    );
};

export default NavbarItem;