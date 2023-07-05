import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";



function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  // const [clientWindowHeight, setClientWindowHeight] = useState("");
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  //   setIsScrolled(window.scrollY > 0);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  // const [boxShadow, setBoxShadow] = useState(0);


const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
  if (window.scrollY >= 80) {
    setNavbar(true)
  }
  else {
    setNavbar(false)
  }
}

useEffect(() => {
  window.addEventListener("scroll", changeBackground);
}, []);

  return (
    <div>
      <HideOnScroll>
    <div className={navbar ? 'navbar active' : 'navbar'}>
   
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul style={{color:'#000 !important'}} tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500  rounded-box w-52">
        
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a href="/about">About us</a></li>
        <li><a>Pricing</a></li>
      <li><a>Demo</a></li>
      </ul>
    </div>
    <div style={{display:'flex', flexDirection:'row', alignItems:'center', paddingLeft:'2rem'}}>
    <Image
                  src="/ninjas_logo.svg"
                  style={{ width: "30px", height: "30px" }}
                  alt="logo"
                  width={40}
                  height={40}
                />
    <p style={{color:'rgb(34 197 94)', fontWeight:'600',paddingLeft:'6px'}} className="text-xl">Canna</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul  className="p-2 bg-green-500">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
            </ul>
        </details>
      </li>
      <li><a href="/about">About us</a></li>
      <li><a>Pricing</a></li>
      <li><a>Demo</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <button style={{marginRight:'2rem'}} className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join us</button>
  </div>
      
</div>
</HideOnScroll>
</div>
  );
};

export default Navbar;
