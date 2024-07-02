import Buttons from "../buttons";

import { MdLibraryBooks } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

function BottomSidebar() {
  return (
    <div className="mt-2 h-[85%] w-full rounded-lg bg-[#121212] p-5">
      <div className="flex justify-between items-baseline">
        <Buttons icons={<MdLibraryBooks size={"30"} />} text={"Sua Biblioteca"} />
        <div className="flex">
          <button className="hover:bg-[#2F2F2F] rounded-full mr-4"><IoIosAdd size={'30'} color="#B3B3B3"/></button>
          <button className="hover:bg-[#2F2F2F] rounded-full"><GoArrowRight size={'30'} color="#B3B3B3"/></button>
        </div>
      </div>
    </div>
  );
}

export default BottomSidebar;
