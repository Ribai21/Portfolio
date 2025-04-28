import React,{useEffect,useState} from 'react'
import Home from './Component/Home/Home'
import { BiUpArrowAlt } from "react-icons/bi";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  return (
 
      <div className="overflow-x-hidden">
        <Home />
       {isVisible && <div onClick={scrollToTop} className="fixed bg-[#00b8ff] flex justify-center items-center text-white z-50 rounded-full p-2 bottom-4 right-5 cursor-pointer hover:scale-110 transition-transform duration-300">
        <a href='#' className="absolute inline-flex h-full w-full rounded-full border  border-[#00b8ff] opacity-75 animate-ping"></a>
          <BiUpArrowAlt size={27}/>
        </div>}
        

      </div>
    
  )
}

export default App