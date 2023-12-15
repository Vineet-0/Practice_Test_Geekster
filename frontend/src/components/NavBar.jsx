"use client";
import React, { useState } from "react";

import { IoFastFoodOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const NavBar = ({searchTerm, setSearchTerm}) => {

    const [showSearchBar, setShowSearchBar] = useState(false);

    return (
        <div className="">
            <div className="bg-white shadow flex flex-row items-center justify-between px-8 md:px-16 py-6 md:py-4">
                <div className="bg-white text-3xl flex flex-row items-center">
                    <IoFastFoodOutline className="bg-white" />
                </div>
                <div className="hidden md:block flex-row items-center gap-2 px-4 py-2 bg-white border-2 border-gray-100 rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white w-[400px] decoration-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaMagnifyingGlass className="bg-white"/>
                    </button>
                </div>
                <div className="bg-white text-3xl flex flex-row items-center gap-6">
                    <button
                        onClick={(e) => setShowSearchBar(~showSearchBar)}
                    >
                        <FaMagnifyingGlass className="md:hidden text-2xl bg-white"/>
                    </button>
                    <LuLayoutDashboard className="bg-white "/>
                    <FaRegUserCircle className="bg-white "/>
                </div>
            </div>
            {showSearchBar ? 
                <div className="md:hidden shadow flex flex-row items-center justify-between gap-2 mx-4 mt-4 px-4 py-2 bg-white  rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white w-full decoration-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaMagnifyingGlass className="bg-white"/>
                    </button>
                </div>
                :
                <div></div>
            }
        </div>
    )
}

export default NavBar