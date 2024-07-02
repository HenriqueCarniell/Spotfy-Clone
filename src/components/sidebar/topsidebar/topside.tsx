import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Buttons from "./buttons";

function TopSidebar() {
  return (
    <div className="h-1/4 w-full rounded-lg bg-zinc-900 p-6">
      <Buttons icons={<MdHomeFilled size={"30"} />} text={"Início"} />
      <Buttons icons={<IoSearchOutline size={"30"} />} text={"Buscar"} />
    </div>
  );
}

export default TopSidebar;
