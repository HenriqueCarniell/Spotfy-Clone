import BottomSidebar from "./bottomsidebar/bottomside";
import TopSidebar from "./topsidebar/topside";

function MainSidebar() {
  return (
    <div className="h-screen min-w-SidebarMinwidth max-w-SidebarMaxwidth rounded-lg bg-black p-2">
      <TopSidebar />
      <BottomSidebar />
    </div>
  );
}

export default MainSidebar;
