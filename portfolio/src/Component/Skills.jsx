import React from "react";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
      color: "orange",
    },
    {
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "skyblue",
    },
    {
      name: "Javascript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "yellow",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "skyblue",
    },
    {
      name: "Node",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      color: "green",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "purple",
    },
    {
      name: "Tailwind Css",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "blue",
    },
    {
      name: "Framer Motion",
      img: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      color: "purple",
    },
    {
      name: "Postman",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "orange",
    },
    {
      name: "MySQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "blue",
    },
    {
      name: "VS Code",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "blue",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "black",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "orange",
    },
    {
      name: "Vercel",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      color: "black",
    },
    {
      name: "Netlify",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      color: "cyan",
    },
    {
      name: "NPM",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      color: "red",
    },
  ];
  const getBgColorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-red-400/20";
      case "blue":
        return "bg-blue-400/20";
      case "green":
        return "bg-green-400/20";
      case "purple":
        return "bg-purple-400/20";
      case "orange":
        return "bg-orange-400/20";
      case "indigo":
        return "bg-indigo-400/20";
      case "yellow":
        return "bg-yellow-400/20";
      case "skyblue":
        return "bg-[#00b8ff]/20";
      case "black":
        return "bg-black/20";
      case "cyan":
        return "bg-cyan-400/20";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <motion.section>
        <h1 className="text-3xl text-center font-lobster mb-4 md:text-5xl text-[#00b8ff]">
          MY Skills
        </h1>
        <div className="">
          {/* child */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="grid grid-cols-2 md:grid-cols-4 w-[75%] mx-auto gap-7 md:p-10"
          >
            {skills.map((skill, index) => (
              <div key={index} className="relative group ">
                {/* Red background div behind */}
                <div
                  className={`absolute inset-0 backdrop-blur-md border-blue-500 border-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-5 group-hover:-translate-y-5 transition duration-300 -z-10 rounded-lg ${getBgColorClass(
                    skill.color
                  )}`}
                />

                {/* Glass effect box */}
                <div className="relative flex flex-col items-center justify-center space-y-2 p-2 backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition duration-300 shadow-[0px_1px_6px_0px_rgba(59,130,246,0.7)] z-10 rounded-lg">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-16  h-16"
                  />
                  <div className="text-center  transition duration-200   whitespace-nowrap text-white">
                    {skill.name}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
