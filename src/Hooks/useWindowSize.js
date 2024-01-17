import { useState, useEffect } from "react";

//A custom hook for getting the width and height of a window viewport
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width:undefined,
        height: undefined

    });

    //Runs during loading time
    useEffect(()=> {
        const handleResize = () => {
            setWindowSize({
                //Tracks the window size once this is called into action
                width:window.innerWidth,
                height: window.innerHeight,
            })
        }
        //call it once during loading
        handleResize();
        window.addEventListener("resize", handleResize);
        //important to prevent memory leak! Clean up function 
        return ()=> window.removeEventListener("resize", handleResize); ;

    },[])

    return windowSize;
}

export default useWindowSize;