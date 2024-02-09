import NavBar from "./_components/NavBar";
import OrgSideBar from "./_components/sidebar/OrgSideBar";
import SideBar from "./_components/sidebar/SideBar";

interface Props {
    children: React.ReactNode;
}
const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex h-screen">
            <SideBar    />
            <div className="w-full pl-[60px] h-full">
                <div className=" w-full flex gap-x-3 h-full">
                    <OrgSideBar />
                    <div className="h-full flex-1 bg-red-200">
                        <NavBar/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout