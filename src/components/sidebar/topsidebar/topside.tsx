import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import Buttons from "./buttons";

function TopSidebar() {
    return ( 
        <div className="p-5">
            <Buttons icons={<MdHomeFilled />} text={'Início'}/>
            <Buttons icons={<IoSearchOutline />} text={'Buscar'}/>
        </div>
     );
}

export default TopSidebar;