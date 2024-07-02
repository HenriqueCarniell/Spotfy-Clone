import BottomSidebar from "./bottomsidebar/bottomside";
import TopSidebar from "./topsidebar/topside";

function MainSidebar() {
  return (
    <div className="grid h-screen min-w-SidebarMinwidth max-w-SidebarMaxwidth rounded-lg bg-black p-3">
      <TopSidebar />
      <BottomSidebar />
    </div>
  );
}

export default MainSidebar;
