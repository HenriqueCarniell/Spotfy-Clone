import BottomSidebar from "./bottomsidebar/bottomside";
import TopSidebar from "./topsidebar/topside";

function MainSidebar() {
    return ( 
        <div className="flex min-w-SidebarMinwidth max-w-SidebarMaxwidth h-screen  rounded-lg">
            <TopSidebar />
            <BottomSidebar />
        </div>
     );
}

export default MainSidebar;
