import React from 'react'
import { FaGithub ,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ShinyText from './library/Shine';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';


const Footer = () => {
return (
    <div className="relative text-white mt-10 py-6">
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{ duration: 2 }}
            className="div">
            <ul className="flex justify-center text-[#00b8ff] space-x-6 mb-4">
                    <li className='transform hover:-translate-y-2 fonr-semi transition duration-300'><Link to="home" smooth={true} duration={200}>Home</Link></li>
                    <li className='transform hover:-translate-y-2 fonr-semi transition duration-300'><Link to="about" smooth={true} duration={200}>About</Link></li>
                    <li className='transform hover:-translate-y-2 fonr-semi transition duration-300'><Link to="project" smooth={true} duration={200}>Project</Link></li>
                    <li className='transform hover:-translate-y-2 fonr-semi transition duration-300'><Link to="contact" smooth={true} duration={200}>Contact</Link></li>
            </ul>
            <div className="flex justify-center text-[#00b8ff] mt-6 space-x-6">
                    <a href="https://github.com/Ribai21" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125  transition duration-300">
                           <FaGithub size={25}/>
                    </a>
                    <a href="https://www.linkedin.com/in/ribai-a" target="_blank" rel="noopener noreferrer"className="transform hover:scale-125  transition duration-300">
                            <FaLinkedin size={25}/>
                    </a>
                    <a href="https://www.instagram.com/__r_ib_ai._" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125  transition duration-300">
                            <FaInstagram size={25}/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125  transition duration-300">
                                <FaFacebook size={25}/>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125  transition duration-300">
                                <FaXTwitter size={25}/>
                    </a>
           
            </div>
            <div className="w-64 h-64  bg-blue-500/20 blur-3xl -z-20 absolute bottom-[30%] right-8"></div>
            </motion.div>

           
  
           <div className="w-fit mx-auto my-4">
           {/* <ShinyText text="Ribai Developer" disabled={false} speed={3}  className='text-5xl text-center font-Winky custom-class' /> */}
           </div>
            

            



    </div>
)
}

export default Footer