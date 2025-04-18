import React, { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import ShinyText from './library/Shine';
import { motion } from 'framer-motion';

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
      <ShinyText text="RIBAI" disabled={false} speed={3}  className='text-5xl text-center text-[#00b8ff] ms-[5%] font-Winky custom-class' />

      {/* Hamburger for mobile */}
      <button
        className='md:hidden text-[#00b8ff]  text-3xl'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
    {menuOpen ? <IoCloseSharp/> : <RiMenu3Fill/>}
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex me-[25%] p-2 z-40 rounded-md text-black font-semibold space-x-6 text-lg backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        <li className='transform hover:-translate-y-2 transition duration-300'><a href="#home"> Home</a></li>
        <li className='transform hover:-translate-y-2 transition duration-300'><a href="#about" >About</a></li>
        <li className='transform hover:-translate-y-2 transition duration-300'><a href="#projects" >Projects</a></li>
        <li className='transform hover:-translate-y-2 transition duration-300'><a href="#contact"> Contact</a></li>
      </ul>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className='absolute text-black top-full left-0 w-full bg-[#00719c] font-semibold flex flex-col items-center gap-4 py-6 md:hidden z-50'>
        <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        </li>
        <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li className='border-b-2 border-transparent hover:border-black transition duration-300'>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>
      
      )}
    </motion.header>
  );
};

export default Header;
