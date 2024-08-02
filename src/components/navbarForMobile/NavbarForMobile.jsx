import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HiBars3BottomLeft } from "react-icons/hi2";

import { IoIosCloseCircle } from "react-icons/io";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import { MdGTranslate } from "react-icons/md";

function NavbarForMobile() {
    const [sidebar, setSidebar] = useState(false);
    const location = useLocation();

    const showSidebar = () => setSidebar(!sidebar);

    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const addTranslateScript = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'mr,en',
                    autoDisplay: false
                }, 'google_translate_element');
            }
        };

        const initializeTranslateElement = () => {
            if (window.google && window.google.translate) {
                window.googleTranslateElementInit();
            }
        };

        addTranslateScript()
            .then(initializeTranslateElement)
            .catch(err => console.error('Google Translate script failed to load:', err));
    }, []);

    useEffect(() => {
        const translateElement = document.querySelector('#google_translate_element select');
        if (translateElement) {
            translateElement.value = language;
            translateElement.dispatchEvent(new Event('change'));
        }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLanguage => {
            const newLanguage = prevLanguage === 'en' ? 'mr' : 'en';
            const button = document.getElementById('translate_toggle_button');
            if (button) {
                button.textContent = newLanguage === 'en' ? 'Translate to Marathi' : 'Translate to English';
            }
            const translateElement = document.querySelector('#google_translate_element select');
            if (translateElement) {
                translateElement.value = newLanguage;
                translateElement.dispatchEvent(new Event('change'));
            }
            return newLanguage;
        });
    };

    return (
        <>
            <IconContext.Provider value={{ color: 'inherit' }}>
                <div className='w-full flex justify-between items-center h-20 px-8'>
                    <div className="flex items-center">
                        <Link to="#" className='text-2xl'>
                            <HiBars3BottomLeft onClick={showSidebar} className="text-black" />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <MdGTranslate className='text-2xl' id="translate_toggle_button" onClick={toggleLanguage} />
                    </div>
                </div>

                <nav className={`bg-[#1a73e8] w-64 h-screen flex justify-center fixed top-0 left-0 transform ${sidebar ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-350 rounded-2xl`}>

                    <ul className='w-full'>
                        <li className="bg-[#1a73e8] w-full h-20 flex justify-start items-center">
                            <Link to='#' className='ml-8 text-2xl bg-none'>
                                <IoIosCloseCircle onClick={showSidebar} />
                            </Link>
                        </li>
                        <div className="flex flex-col items-center my-4">
                            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
                                <span className="text-5xl text-[#1a73e8]">👤</span>
                            </div>
                            <p className="text-white mt-4 text-lg">Kishor Asabe</p>
                        </div>
                        {/* <li className="flex justify-start items-center py-2 px-4 list-none h-15">
                            <Link
                                className='no-underline text-lg w-full h-full flex items-center p-4 rounded-md text-white hover:bg-[#003f88]'
                                onClick={showSidebar}
                            >
                                
                                <button id='translate_toggle_button' onClick={toggleLanguage} className="ml-4">Translate</button>
                            </Link>
                        </li> */}
                        {SidebarData.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={index} className="flex justify-start items-center py-2 px-4 list-none h-15">
                                    <Link
                                        to={item.path}
                                        className={`no-underline text-lg w-full h-full flex items-center p-4 rounded-md 
                                            ${isActive ? 'bg-[#003f88] text-white' : 'text-white hover:bg-[#003f88]'}`
                                        }
                                        onClick={showSidebar}
                                    >
                                        {item.icon}
                                        <span className="ml-4">{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavbarForMobile;
