import Navbar from "../components/navbar/Navbar";

export default async function ProfilesLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="h-full">
            {/* <Navbar /> */}
            {children}
        </div>
    );
}