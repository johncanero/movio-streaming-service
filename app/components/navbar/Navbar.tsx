import getCurrentUser from '@/app/actions/getCurrentUser';
import DesktopNavbar from './DesktopNavbar';

async function Navbar({}: {
}) {
    const currentUser = await getCurrentUser();
    return (
        <div>
            <DesktopNavbar currentUser={currentUser!} />A
        </div>
    )
}

export default Navbar;


