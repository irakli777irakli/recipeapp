import React,{useEffect,useState} from 'react';


// custom hook to track screen size change
export function useWindowSize(){
  const [size,setSize] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = () => {
      setSize(window.innerWidth)
     
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])
  return size;
};




