import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import ShinyText from './library/Shine';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header 
    
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    // exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 1.8 }}
    className='w-full flex sticky top-0 z-50 justify-between items-center p-7  text-white '>
      {/* <h1 className='text-3xl md:text-5xl text-black hover:text-[#00b8ff] ms-20 font-Winky'>Ribai</h1> */}
      <ShinyText text="RIBAI" disabled={false} speed={3}  className='text-5xl text-center text-[#00b8ff] ms-[5%] font-lobster custom-class' />

      {/* Hamburger for mobile */}
      <button
        className='md:hidden text-[#00b8ff]  text-3xl'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
    {menuOpen ? <IoCloseSharp/> : <RiMenu3Fill/>}
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex me-[25%] p-2 z-40 rounded-md text-[#d6e6f2] font-semibold space-x-6 text-lg backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        {/* <li className='transform hover:-translate-y-2 transition duration-300'><a href="#home"> Home</a></li> */}
        <li className='transform hover:-translate-y-1 hover:text  transition duration-300'><Link to="home" smooth={true} duration={600} >Home</Link></li>
        <li className='transform hover:-translate-y-1  transition duration-300'><Link to="about" smooth={true} duration={600} >About</Link></li>
        <li className='transform hover:-translate-y-1  transition duration-300'><Link to="project" smooth={true} duration={600} >Project</Link></li>
        <li className='transform hover:-translate-y-1  transition duration-300'><Link to="contact" smooth={true} duration={600} >Contact</Link></li>
      </ul>

      {/* Mobile Nav */}
      {menuOpen && (
  <motion.ul
  initial={{ opacity: 0, y: -100, scale: 0.8 }}
  animate={{ opacity: 1,y:0, scale: 1 }}
  transition={{ duration: 0.4 }}
  className='absolute text-[#F1F5F9] top-full right-[5%] w-[90%] bg-[#00719c] font-semibold flex flex-col items-center gap-4 py-6 md:hidden z-50
    border-2 border-blue-900 rounded-md'
>
  {/* Menu Items */}
  <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
    <Link to="home" smooth={true} duration={200} onClick={()=>setMenuOpen(false)}>Home</Link>
  </li>
  <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
    <Link to="about" smooth={true} duration={200} onClick={()=>setMenuOpen(false)}>About</Link>
  </li>
  <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
    <Link to="project" smooth={true} duration={200} onClick={()=>setMenuOpen(false)}>Project</Link>
  </li>
  <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
    <Link to="contact" smooth={true} duration={200} onClick={()=>setMenuOpen(false)}>Contact</Link>
  </li>
</motion.ul>

)}

      
    </motion.header>
  );
};

export default Header;
