import React, { useState } from "react";

import { IoFastFoodOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="bg-white shadow">
            <div className="flex flex-row items-center justify-between px-16 py-4">
                <div className="text-3xl flex flex-row items-center gap-6">
                    <IoFastFoodOutline />
                </div>
                <div className="flex flex-row items-center gap-2 px-4 py-2 bg-white border-2 border-blue-400 rounded-lg">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[400px] decoration-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>
                        <FaMagnifyingGlass />
                    </button>
                </div>
                <div className="text-3xl flex flex-row items-center gap-6">
                    <LuLayoutDashboard />
                    <FaRegUserCircle />
                </div>
            </div>
        </div>
    )
}

export default NavBar