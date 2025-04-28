import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import alpharena from "../assets/alphaarena.png";
import todo from "../assets/todo.png";
import rest from "../assets/rest.png";
import zoom from "../assets/zoom.png";
import "swiper/css";
import "swiper/css/effect-creative";

const Project = () => {
const project=[
  {
    id: 1,
    title: "Gym Management System",
    description:
      "A full-stack MERN application that allows admins to efficiently manage their gym operations. Built with MySQL, Express, React, and Node.js, and styled using Tailwind CSS for a modern and responsive design.",
    image: alpharena,
    demoLink: "https://ribaiportfolio.vercel.app/",
  },
  {
    id: 2,
    title: "todo list",
    description:
      "A simple todo list application built with React and Tailwind CSS. Users can add, edit, and delete tasks, making it easy to manage their daily activities.",
    image: todo,
    demoLink: "#",
  },
  {
    id: 3,
    title: "website for Restruant",
    description:
        "A responsive website for a restaurant, showcasing its menu, ambiance, and services. Built with HTML, CSS, and JavaScript, ensuring a seamless user experience across devices.",
    image: rest,
    demoLink: "#",
  },
  {
    id: 4,
    title: "Zoom Clone",
    description:
      "A popular video confressing application clode using only boostrap and HTML.",
    image: zoom,
    demoLink: "#",
  }
  
  
]

  return (
    <div className="relative my-5">
      <div className="flex min-h-screen  p-3 flex-col " id="project">
      <h1 className="text-3xl text-center font-lobster md:text-5xl text-[#00b8ff] mb-10">
        MY Projects</h1>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="md:w-[320px] w-[300px] h-[440px] p-2  shadow-[0px_1px_20px_0px_rgba(59,130,246,0.7)]"
      >
        {project.map((item)=>(
          <SwiperSlide key={item.id} className="flex p-3 h-full items-center space-y-2 rounded-md justify-cente backdrop-blur-md bg-white/20 border border-white/20 shaow-[0px_1px_20px_0px_rgba(59,130,246,0.7)]">
          <img src={item.image} alt="" />
          <h1 className="text-xl font-semibold text-[#00b8ff]">{item.title}</h1>
         <p className=" flex text-justify text-[#F1F5F9]">{item.description}</p>
          <a  href={item.demoLink} target="_blank" >
          <button className="mx-auto flex bg-[#38BDF8] mt-3 hover:bg-transparent px-5 rounded-xl font-medium transition duration-200 border border-[#38BDF8] text-white hover:text-[#38BDF8] text-lg py-2">View Demo</button>
          </a >
        </SwiperSlide>
        ))}
       </Swiper>
       <span className="text-[#F1F5F9] mx-auto text-xs">*drag to see more projects</span>
    </div>
       <div className="w-96 h-96  bg-blue-500/20 blur-3xl absolute bottom-[70%] -right-8"></div>
       <div className="w-96 h-96  bg-blue-500/20 blur-3xl absolute top-[70%] left-16"></div> 
    </div>
  );
};

export default Project;
