import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Panda1 ()  {
    const { ref} = useWebAnimations({

        keyframes: [
                    { transform: "translateX(0px)" },
                    { transform: "translateX(100px)" }
                    ],
        timing: { duration: 4000, iterations: Infinity, direction: "alternate", easing: "ease-in-out" },
      });

   
      return (
        <div ref={ref} >
          <div >
          
            <img src="https://www.netanimations.net/penguinpanda.gif" alt="" style={{ width: "500px", height: "500px",  top:"180px", position: "absolute", left:"1000px"}} /> 
          </div>

        </div>


      );

      
};