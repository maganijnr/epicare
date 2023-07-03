import React from "react";
import DefaultButton from "../atoms/Button";
import { TbLogout } from "react-icons/tb";
import { Button } from 'flowbite-react'

const Sidebar = () => {
   return (
      <div className="w-[280px] bg-[#1A5659] sticky left-0 top-0 h-screen min-h-screen">
         <h2>Sidebar</h2>
         <div className="w-full absolute bottom-0 h-[80px] bg-[#1A5659] flex items-center">
            <Button className="flex items-center justify-between"><h2>Logout</h2> <TbLogout /></Button>
            {/* <DefaultButton
               btnIcon={TbLogout}
               btnText="Logout"
               btnStyles="bg-[#1A5659] w-full flex items-center rounded-[0px] hover:bg-[#1A5659] max-w-[240px] justify-between px-[2px]"
               iconSide="right"
            /> */}
         </div>
      </div>
   );
};

export default Sidebar;
