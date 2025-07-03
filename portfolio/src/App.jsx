import React,{useEffect,useState} from 'react'
import Home from './Component/Home/Home'
import { BiUpArrowAlt } from "react-icons/bi";
import { HashLoader } from "react-spinners";
import Neo from './Component/library/cursor/Neo';
// import LetterGlitch from './Component/library/LetterGlitch';
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const toggleVisibility = () => {
    if (window.scrollY > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    const timer =setTimeout(() => {
      setLoading(false)
    }, 3000);

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);
  if(loading){
    return (
      <div className="flex items-center justify-center h-screen bg-opacity-5 bg-[#0c3747]">
       {/* <Atom color="#32cd32" size="medium" text="" textColor="" /> */}
       <HashLoader color='#00aeff' className='animate-pulse'/>
       {/* <div className="h-32 bg-[#00b8ff] w-32 animate-open rounded-full "></div> */}
       
       
      </div>
    );
  }
  return (
 
      <div className="overflow-x-hidden">
        <Home />
       <div  className={`fixed bg-[#00b8ff]  flex justify-center items-center text-white z-50 rounded-full p-2 bottom-4 right-5 cursor-pointer hover:scale-110 ${isVisible ? 'scale-100' : 'scale-0'}   transition-transform duration-500`}>
        <a href='#' className="absolute inline-flex h-full w-full rounded-full border  border-[#00b8ff] opacity-75 animate-ping"></a>
          <BiUpArrowAlt size={27}/>
        </div>
        
        <Neo/>
      </div>
    
  )
}

export default App