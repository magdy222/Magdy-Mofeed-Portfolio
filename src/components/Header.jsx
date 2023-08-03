import React,{useContext, useEffect, useState} from 'react';
import Socials from "../components/Socials"
import MobileNav from "../components/MobileNav"
import Logo from "../assetes/logo.png"
import { Link } from 'react-router-dom'
import { CursorContext } from '../content/CursorContent'
import {BsFillMoonFill} from "react-icons/bs"




const Header = () => {
  const {mouseEnterHandler, mouseLeaverHandler} = useContext(CursorContext)

  const [theme , setTheme] = useState("light")

  useEffect(()=>{
   if(window.matchMedia('(prefers-color-scheme: dark)')){
     setTheme("dark")
   }else{
    setTheme("light")
   }
  },[])
  
  useEffect(()=>{
   if(theme === "dark"){
    document.documentElement.classList.add("dark")
   }else{
    document.documentElement.classList.remove("dark")
   }
  },[theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return <header
            className='fixed w-full dark:bg-[#06202A] dark:text-gray-300
            px-[0px] lg:px-[60px] h-[80px] z-30 lg:h-[90px] flex items-center'>
         <div className='flex items-center lg:flex-row lg:items-center justify-between w-full'>
         <Link to={"/"}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaverHandler}>
          <img alt='logo' src={Logo} className='max-w-[220px] pt-3'/>
         </Link>

         <nav
                 onMouseEnter={mouseEnterHandler}
                 onMouseLeave={mouseLeaverHandler}
          className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={"/"} className='text-[#696c6d] dark:text-gray-300 hover:text-primary transition'>
            Home
          </Link>
          <Link to={"/about"} className='text-[#696c6d] dark:text-gray-300 hover:text-primary transition'>
            About
          </Link>
          <Link to={"/projects"} className='text-[#696c6d] dark:text-gray-300 hover:text-primary transition'>
            Projects
          </Link>
          <Link to={"/contact"} className='text-[#696c6d] dark:text-gray-300 hover:text-primary transition'>
            Contact
          </Link>
         </nav>
         <BsFillMoonFill className='w-8 h-8 text-purple-500' onClick={handleThemeSwitch}
                          onMouseEnter={mouseEnterHandler}
                          onMouseLeave={mouseLeaverHandler} />
         <Socials/>
         <MobileNav/>
       </div>
  </header>;
};

export default Header;