"use client";


import NavigationMenuDemo from "../Navigation/NavigationShad";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {AiOutlineSearch} from "react-icons/ai"
import React, {useCallback, useState} from "react";



const HeaderTow = () => {
    const [showmobilmenu, setShowMobilmenu] = useState<boolean>(false)

    const toggelMenu = useCallback(() => {
        setShowMobilmenu((curent) => !curent);
    }, [])
    return(
        <div className="flex flex-row items-center justify-center mt-4">
            <img className="flex xl:h-11 lg:h-11 md:h-11 sm:h-7 h-7 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt="" />
        
        <div onClick={toggelMenu} className="md:flex sm:hidden lg:flex xl:flex hidden flex-col items-center text-xs hover:text-[#3665f3] cursor-pointer ">
        <h1 className="ml-3">Explorer par</h1>
        <h1>catégorie</h1>
       
        </div>
        <div className=" xl:flex lg:flex md:flex sm:hidden hidden">
        <MdOutlineKeyboardArrowDown className="cursor-pointer" size={25} />
        <NavigationMenuDemo vivible={showmobilmenu} />
        </div>
        

        <div className="flex ml-2  flex-row items-center border-2 border-gray-600 xl:p-2 lg:p-2 md:p-2 xl:w-96 lg:w-96 md:w-96 ">
            <AiOutlineSearch  color="gray" />
            <input className="flex flex-row ml-2 outline-none"  type="text" placeholder="Rechercher sur eBay" />
           
        </div>
        <div>
            <div className="ml-1 xl:p-2 lg:p-2 md:p-2 xl:hidden lg:hidden md:hidden  text-white  bg-[#3665f3]">
            <AiOutlineSearch size={25} />
            </div>
            
                <button className="ml-5 p-2 w-36 text-white xl:flex lg:flex md:flex sm:hidden hidden items-center  bg-[#3665f3]">Rechercher</button>
            </div>
            <p className="ml-3 text-gray-600 text-xs hover:text-[#3665f3] cursor-pointer xl:flex lg:flex md:flex sm:hidden hidden">Recherch aprofondie</p>
        </div>
    )
}

export default HeaderTow;