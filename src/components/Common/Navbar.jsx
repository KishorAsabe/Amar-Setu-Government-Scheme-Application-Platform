import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropdown";
import NavbarForMobile from "../navbarForMobile/NavbarForMobile";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  // const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [language, setLanguage] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      };
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'mr,en',
        autoDisplay: false
      }, 'google_translate_element');
    };

    if (!window.google || !window.google.translate) {
      addTranslateScript();
    } else {
      window.googleTranslateElementInit();
    }
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
      // Trigger translation manually
      const translateElement = document.querySelector('#google_translate_element select');
      if (translateElement) {
        translateElement.value = newLanguage;
        translateElement.dispatchEvent(new Event('change'));
      }
      return newLanguage;
    });
  };

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${location.pathname !== "/" ? "bg-richblack-800" : ""
        } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? null : (
                  <Link to={link?.path}>
                    <p className={`${matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Translate, Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {/* Translate Button */}
          <div id="google_translate_element" style={{ display: 'none' }}></div>
          <button id="translate_toggle_button" onClick={toggleLanguage} className="mr-4 px-3 py-1 bg-blue-500 text-white rounded">
            Translate
          </button>
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button onClick={toggleMenu} className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {/* {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-richblack-800 p-4">
          <NavbarForMobile />
          <div className="flex flex-col gap-y-4 mt-4">
            {user && user?.accountType !== 'OPERATOR' && (
              <Link to="/dashboard/cart" className="relative" onClick={toggleMenu}>
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              </Link>
            )}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            <button
              id="translate_toggle_button"
              onClick={toggleLanguage}
              className="mr-4 px-3 py-1 bg-blue-500 text-white rounded"
            >
              Translate
            </button>
            {/* {token !== null && <ProfileDropdown />} */}
          {/* </div> */}
        {/* // </div> */}
      {/* // )} */} 

      {/* <div className="md:hidden absolute top-14 left-0 right-0 bg-richblack-800 p-4">
          <NavbarForMobile />
        </div> */}


    </div>
  );
}

export default Navbar;
