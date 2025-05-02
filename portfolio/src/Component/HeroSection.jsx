import React from "react";
import hero from "../assets/heroimg.png";
import { FaCss3, FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import RotatingText from "./library/Rotating";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen  p-5 flex flex-col-reverse  lg:flex-row"
    >
      {/* Left - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="w-full lg:w-1/2 md:text-left lg:items-start  relative text-center mt-3 md:mt-0 md:p-8 space-y-6 flex flex-col justify-center"
      >
        <h1 className="text-4xl md:text-7xl text-[#d6e6f2] font-lobster">
          I'm <span className="animate-shine text-[#38BDF8]">Ribai</span>
        </h1>
        <h3 className="text-2xl md:text-3xl flex justify-center items-center font-semibold text-[#38BDF8] ">
          I'm a{" "}
          <span className="text-black">
            <RotatingText
              texts={["Developer.", "Fresher.", "Coder."]}
              mainClassName="px-2 sm:px-2 ms-2 md:px-2 font-charm  text-[#d6e6f2] overflow-hidden py-0.4 sm:py-1 md:py-1 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.3 sm:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h3>
        <p className="text-lg text-[#F1F5F9] text-justify  md:text-xl">
          I’m a passionate MERN stack developer with hands-on experience from
          personal and academic projects. I’m a fresher who loves building
          user-friendly web applications and constantly learning to improve my
          skills.
        </p>
        <div className="flex md:flex-row flex-col gap-5 text-base md:text-xl">
          <a
            className="flex items-center text-[#F1F5F9] gap-2 font-semibold"
            href="https://www.google.com/maps?q=Tenkasi" target="_blank" rel="noopener noreferrer"
          >
            <FaLocationDot color="#38BDF8" size={22} />
            Tenkasi
          </a>
          <a
            className="flex items-center text-[#F1F5F9] gap-2 font-semibold"
            href="tel:+91 9894175227"
          >
            <IoCallSharp color="#38BDF8" size={22} />
            9894175227
          </a>
          <a
            className="flex items-center text-[#F1F5F9] gap-2 font-semibold"
            href="mailto:mohammedribai21601@gmail.com"
          >
            <IoMdMail color="#38BDF8" size={22} />
            mohammedribai21601@gmail.com
          </a>
        </div>
        <button>
          <a
            href="/ribaifullstack.pdf"
            download
            className="bg-[#38BDF8] hover:bg-transparent px-5 rounded-xl font-medium transition duration-200 border border-[#38BDF8] text-white hover:text-[#38BDF8] text-lg py-2"
          >
            Download CV
          </a>
        </button>
        <div className="w-56 h-56  bg-blue-500/20 blur-3xl absolute top-20 right-16"></div>
      </motion.div>

      {/* Right - Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="w-full lg:w-1/2 h-[90%] flex relative  justify-center items-center"
      >
        <FaReact
          size={50}
          className="absolute left-[10%] top-[5%] md:left-[20%] text-[#38BDF8] opacity-30 animate-spinner md:top-10"
        />
        <FaHtml5
          size={50}
          className="absolute text-[#38BDF8] opacity-10 animate-pulse md:left-[10%] md:top-[60%] bottom-[40%] left-0"
        />
        <FaNodeJs
          size={50}
          className="absolute text-[#38BDF8] opacity-30 animate-spinner right-[10%] top-[90%]"
        />
        <FaCss3
          size={50}
          className="absolute text-[#38BDF8] opacity-10 animate-pulse   right-[10%] top-[5%]"
        />
        <img
          src={hero}
          alt="Hero"
          className="w-[100%] md:w-[60%] md:-me-24 lg:w-[77%] lg:-mt-9  z-10 h-full object-cover object-[center_20%]"
        />
        <div className="w-56 h-56 bg-blue-500/20 blur-3xl  absolute top-[75%] right-16"></div>
        {/* <div className="rounded-[18%_82%_62%_38%_/_55%_73%_27%_45%] absolute -z-0 bg-gradient-to-r w-[400px] h-[400px] top-2 right-3 from-orange-400 via-pink-500 to-purple-600"></div> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
