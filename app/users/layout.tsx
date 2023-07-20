import Navbar from "../components/navbar/Navbar";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode,
}) {

    return (
            <div className="h-full">
                <Navbar />
                {children}
            </div>
    );
}