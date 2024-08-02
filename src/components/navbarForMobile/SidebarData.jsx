// // src\components\navbarForMobile\SidebarData.jsx
import React from 'react';
import { GoHomeFill } from "react-icons/go";
// import { HiDocumentReport } from "react-icons/hi";
import { FaPeopleGroup, FaMessage, FaUpload } from "react-icons/fa6";
// import { BiSupport } from "react-icons/bi";
import { MdSpaceDashboard } from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GoHomeFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdSpaceDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Upload Documents',
        path: '/upload-docs',
        icon: <FaUpload/>,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about',
        icon: <FaPeopleGroup/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <FaMessage/>,
        cName: 'nav-text'
    },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: BiSupport,
    //     cName: 'nav-text'
    // }
];


//*

// // src/components/navbarForMobile/SidebarData.jsx
// import React from 'react';
// import { GoHomeFill } from "react-icons/go";
// import { HiDocumentReport } from "react-icons/hi";
// import { FaCartShopping, FaPeopleGroup, FaMessage } from "react-icons/fa6";

// export const SidebarData = [
//     {
//         title: 'Profile',
//         path: '/profile',
//         icon: <GoHomeFill />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Document',
//         path: '/document',
//         icon: <HiDocumentReport />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Language',
//         path: '/language',
//         icon: <FaCartShopping />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Contact Us',
//         path: '/contact',
//         icon: <FaMessage />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'FAQ\'s',
//         path: '/faqs',
//         icon: <FaPeopleGroup />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Terms & Conditions',
//         path: '/terms',
//         icon: <FaCartShopping />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Disclaimer',
//         path: '/disclaimer',
//         icon: <HiDocumentReport />,
//         cName: 'nav-text'
//     },
//     {
//         title: 'Invite Friends',
//         path: '/invite',
//         icon: <FaMessage />,
//         cName: 'nav-text'
//     }
// ];
