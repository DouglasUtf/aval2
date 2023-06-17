
import Aside from "../components/aside"
import Nav from "../components/nav"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:container md:mx-auto">
            <Nav />
            <div className="flex">
                <Aside />
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>


    )
}