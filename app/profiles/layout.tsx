export default async function ProfilesLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="h-full">
            {children}
        </div>
    );
}