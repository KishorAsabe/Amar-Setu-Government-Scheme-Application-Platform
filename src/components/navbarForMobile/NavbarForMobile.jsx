// src\components\navbarForMobile\NavbarForMobile.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function NavbarForMobile() {
    const [sidebar, setSidebar] = useState(false);
    const location = useLocation(); // Get current route path

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="bg-[#060b26] h-20 flex justify-start items-center">
                    <Link to="#" className='ml-8 text-2xl bg-none'>
                        <HiBars3BottomLeft onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={`bg-[#060b26] w-64 h-screen flex justify-center fixed top-0 left-0 transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-350`}>
                    <ul className='w-full' onClick={showSidebar}>
                        <li className="bg-[#060b26] w-full h-20 flex justify-start items-center">
                            <Link to='#' className='ml-8 text-2xl bg-none'>
                                <IoIosCloseCircle />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            const isActive = location.pathname === item.path; // Check if the current path matches the item's path
                            return (
                                <li key={index} className="flex justify-start items-center py-2 px-4 list-none h-15">
                                    <Link
                                        to={item.path}
                                        className={`no-underline text-lg w-full h-full flex items-center p-4 rounded-md 
                                            ${isActive ? 'bg-[#1a83ff] text-white' : 'text-[#f5f5f5] hover:bg-[#1a83ff]'}`
                                        }
                                    >
                                        {item.icon}
                                        <span className="ml-4">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavbarForMobile;
