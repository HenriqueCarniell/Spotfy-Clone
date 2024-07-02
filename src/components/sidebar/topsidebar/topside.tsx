import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Buttons from "../buttons";

function TopSidebar() {
  return (
    <div className="h-[12%] w-full rounded-lg bg-[#121212] p-5">
      <Buttons icons={<MdHomeFilled size={"30"} />} text={"Início"} />
      <Buttons icons={<IoSearchOutline size={"30"} />} text={"Buscar"} />
    </div>
  );
}

export default TopSidebar;
