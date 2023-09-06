"use client";

import React, {useCallback, useState} from "react"

import {MdNotificationsNone} from "react-icons/md"
import {HiOutlineShoppingCart} from "react-icons/hi"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {HiMenu} from "react-icons/hi"
import MobileMenue from "./MobilMenue"

const Header = () => {
    const [showMobilmenu, setShowMobilMenue] = useState<boolean>(false);

    const toggelMobilMenue = useCallback(() => {
        setShowMobilMenue((curent) => !curent);
    }, [])
    return(
        <div className="flex  flex-row md:justify-evenly lg:justify-evenly xl:justify-evenly justify-between p-2 items-center   border-gray-200 border-b-2">
            {/* left */}
            <div className=" cursor-pointer  text-xs">
                <div className="md:flex text-sm lg:flex xl:flex flex-row gap-4 cursor-pointer hidden ">
                <p>Ebay estimation</p>
                <p>Bon plans</p>
                <p>Aide</p>
                </div>
               




                <div onClick={toggelMobilMenue} className="md:hidden  lg:hidden xl:hidden sm:flex  flex flex-row">
                    <HiMenu size={25} />
                    <MobileMenue visibel={showMobilmenu} />
                </div>
            </div>



            {/* right */}
            <div className="flex text-sm   flex-row gap-4 cursor-pointer items-center ">
                <div className="md:flex lg:flex xl:flex hidden flex-row text-sm gap-4">
                <p>Vendre</p>
                <div className="flex flex-row items-center">
                <p>Object suivi</p>
                <MdOutlineKeyboardArrowDown className="" color="gray" />
                </div>
                

                <div  className="flex flex-row items-center">
                <p>Mon eBay</p>
                <MdOutlineKeyboardArrowDown className="" color="gray" />
                </div>
                </div>
               
                


                <div className="flex   flex-row gap-4 cursor-pointer">
                    <MdNotificationsNone size={25} />
                    <HiOutlineShoppingCart size={25} />
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;